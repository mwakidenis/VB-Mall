// authController.js
const User = require("../models/User.js");
const Admin = require("../models/Admin.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const fs = require("fs-extra");
const path = require("path");
const validator = require("validator");

dotenv.config();

// Configs
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS, 10);
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const ACCESS_TOKEN_EXPIRES = process.env.ACCESS_TOKEN_EXPIRES;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
const REFRESH_TOKEN_EXPIRES = process.env.REFRESH_TOKEN_EXPIRES; // longer lived

// OTP Configs  

const OTP_TTL_MS = (process.env.OTP_TTL_MINUTES ? parseInt(process.env.OTP_TTL_MINUTES) : 10) * 60 * 1000; 
const OTP_REQUEST_WINDOW_MS = (process.env.OTP_WINDOW_MINUTES ? parseInt(process.env.OTP_WINDOW_MINUTES) : 60) * 60 * 1000; // window length for request counting
const OTP_MAX_REQUESTS_PER_WINDOW = parseInt(process.env.OTP_MAX_REQUESTS_PER_WINDOW, 10) // max OTP requests per window

// Setup transporter from env (preferred), fallback to nodemailer's well-known Gmail if provided (less recommended)
const transporter = nodemailer.createTransport(
  process.env.SMTP_HOST
    ? {
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    }
    : {
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    }
);

// Helper: generate numeric OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Helper: create tokens
const signAccessToken = (payload) => {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRES });
};
const signRefreshToken = (payload) => {
  return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRES });
};

// Helper: generic server error response
const serverError = (res, err) => {
  console.error(err);
  return res.status(500).json({ message: "Something went wrong. Please try again later." });
};

// ---------------- SIGNUP ----------------
exports.signup = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body || {};

    // Basic presence validation
    if (!username || !email || !password || !phone) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // More robust validation
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format." }); 
    }

    if (!/^\d{10}$/.test(phone)) {
      return res.status(400).json({ message: "Phone must be 10 digits." });
    }

    if (typeof username !== "string" || username.length < 3) {
      return res.status(400).json({ message: "Username must be at least 3 characters." });
    }

    // Password strength minimal enforcement (customize as needed)
    if (password.length < 8) {
      return res.status(400).json({ message: "Password must be at least 8 characters." });
    }

        // Check uniqueness separately
    const existingUserByEmail = await User.findOne({ email }).lean();
    if (existingUserByEmail) {
      return res.status(400).json({ message: "Email already exists." });
    }

    const existingUserByUsername = await User.findOne({ username }).lean();
    if (existingUserByUsername) {
      return res.status(400).json({ message: "Username already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      phone,
      role: 0, // default role
    });

    // Return minimal info (no sensitive data)
    return res.status(201).json({ message: "Account created successfully." });
  } catch (err) {
    return serverError(res, err);
  }
};

// ---------------- LOGIN ----------------
// This endpoint handles normal user login and returns tokens.
// Admin login should ideally be on a separate endpoint for admin dashboard.
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    // Find user (do not reveal whether email exists)
    const user = await User.findOne({ email });
    if (!user) {
      // small delay to mitigate user enumeration timing
      await new Promise((r) => setTimeout(r, 300));
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Optional: account lockout after repeated failed logins
    const LOCK_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
    const MAX_FAILED = parseInt(process.env.MAX_FAILED_LOGIN || "5", 10);

    if (user.failedLogin && user.lastFailedAt) {
      const lastFailedAge = Date.now() - new Date(user.lastFailedAt).getTime();
      if (user.failedLogin >= MAX_FAILED && lastFailedAge < LOCK_WINDOW_MS) {
        return res.status(429).json({ message: "Too many attempts. Try again later." });
      }
      // Reset failed count if old
      if (lastFailedAge >= LOCK_WINDOW_MS) {
        user.failedLogin = 0;
        user.lastFailedAt = undefined;
      }
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      // increment failed count
      user.failedLogin = (user.failedLogin || 0) + 1;
      user.lastFailedAt = new Date();
      await user.save();
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // reset failed counters on success
    user.failedLogin = 0;
    user.lastFailedAt = undefined;
    await user.save();

    // If admin should be handled: check Admin collection but do not overwrite user doc
    const admin = await Admin.findOne({ email });
    let role = user.role || 0;
    if (admin) {
      // require admin password separately (admins should use admin login route ideally)
      const adminPasswordMatch = await bcrypt.compare(password, admin.password);
      if (adminPasswordMatch) {
        role = 1;
      }
      // do not overwrite user data; log if needed
    }

    // Issue tokens
    const accessToken = signAccessToken({ sub: user._id.toString(), role });
    const refreshToken = signRefreshToken({ sub: user._id.toString(), role });

    // Optionally store refresh token hash in DB for revocation (not implemented here)
    return res.status(200).json({
      message: "Login successful.",
      accessToken,
      refreshToken,
      username: user.username,
      role,
    });
  } catch (err) {
    return serverError(res, err);
  }
};

// ---------------- OTP SEND ----------------
exports.otp = async (req, res) => {
  try {
    const { email } = req.body || {};
    if (!email || !validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid request." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      // don't reveal registration state — respond with generic success message to avoid enumeration.
      // But do not send email, obviously.
      return res.status(200).json({ message: "If this email is registered, you will receive an OTP." });
    }

    // Rate limiting per user (sliding window)
    const now = Date.now();
    user.otpRequests = user.otpRequests || [];
    // keep only requests within the window
    user.otpRequests = user.otpRequests.filter((ts) => now - ts < OTP_REQUEST_WINDOW_MS);
    if (user.otpRequests.length >= OTP_MAX_REQUESTS_PER_WINDOW) {
      return res.status(429).json({ message: "Too many OTP requests. Try again later." });
    }

    // push this request
    user.otpRequests.push(now);

    // Generate OTP and hash it
    const otp = generateOTP();
    const otpHash = await bcrypt.hash(otp, SALT_ROUNDS);
    user.otp = otpHash;
    user.otpExpires = new Date(Date.now() + OTP_TTL_MS);
    await user.save();

    // Read external template (async)
    const templatePath = path.join(__dirname, "..", "templates", "otpEmailTemplate.html");
    let htmlTemplate;
    try {
      htmlTemplate = await fs.readFile(templatePath, "utf-8");
    } catch (err) {
      console.error("Email template read error:", err);
      return res.status(500).json({ message: "Unable to build email." });
    }

    // Replace placeholders (simple safe replacement)
    const currentDate = new Date().toLocaleDateString();
    const currentYear = new Date().getFullYear();

    let finalHtml = htmlTemplate
      .replace(/{{username}}/g, user.username || "Customer")
      .replace(/{{otp}}/g, otp)
      .replace(/{{currentDate}}/g, currentDate)
      .replace(/{{currentYear}}/g, currentYear);

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.SMTP_USER || process.env.EMAIL,
      to: email,
      subject: "Your VigyBag verification code",
      html: finalHtml,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("SendMail error:", error);
        // Do not expose details to client
        return res.status(500).json({ message: "Failed to send OTP. Please try again later." });
      }
      // Respond generic success to avoid enumeration timing differences
      return res.status(200).json({ message: "If this email is registered, you will receive an OTP." });
    });
  } catch (err) {
    return serverError(res, err);
  }
};

// ---------------- OTP VERIFY ----------------
exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body || {};
    if (!email || !otp || !validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email or OTP." });
    }

    const user = await User.findOne({ email });
    if (!user || !user.otp || !user.otpExpires) {
      // Generic failure
      return res.status(400).json({ message: "Invalid code or expired." });
    }

    if (Date.now() > new Date(user.otpExpires).getTime()) {
      // Clear OTP fields
      user.otp = undefined;
      user.otpExpires = undefined;
      user.otpRequests = user.otpRequests || [];
      await user.save();
      return res.status(400).json({ message: "OTP expired." });
    }

    const match = await bcrypt.compare(String(otp), user.otp);
    if (!match) {
      return res.status(400).json({ message: "Invalid code." });
    }

    // success: clear otp fields
    user.otp = undefined;
    user.otpExpires = undefined;
    user.otpRequests = [];
    await user.save();

    return res.status(200).json({ message: "OTP verified successfully." });
  } catch (err) {
    return serverError(res, err);
  }
};
