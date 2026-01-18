const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const fs = require("fs-extra");
const path = require("path");
const User = require("../models/User");

// Helper: generic server error response
const serverError = (res, err) => {
  console.error("Password Reset Error:", err);
  return res.status(500).json({ message: "Something went wrong. Please try again later." });
};

router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(200).json({ message: "If your email is registered, you will receive a password reset link." });
    }

    const token = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = token;
    // --- VALIDITY UPDATED TO 10 MINUTES ---
    user.resetPasswordExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
    await user.save();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const resetUrl = `${process.env.PASSWORD_RESET_URL}/${token}`;

    // Read and prepare the HTML template
    const templatePath = path.join(__dirname, "..", "templates", "passwordResetTemplate.html");
    let htmlTemplate;
    try {
        htmlTemplate = await fs.readFile(templatePath, "utf-8");
    } catch (err) {
        console.error("Email template read error:", err);
        return res.status(500).json({ message: "Unable to build email." });
    }

    const currentYear = new Date().getFullYear();
    const finalHtml = htmlTemplate
        .replace(/{{resetUrl}}/g, resetUrl)
        .replace(/{{currentYear}}/g, currentYear);

    const mailOptions = {
      to: user.email,
      from: `VigyBag <${process.env.SMTP_USER}>`,
      subject: "VigyBag Password Reset Request",
      html: finalHtml,
      text: `Please reset your password by clicking the following link: ${resetUrl}`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "If your email is registered, you will receive a password reset link." });
  } catch (error) {
    return serverError(res, error);
  }
});

router.get("/reset-password/:token", async (req, res) => {
  try {
    const user = await User.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Password reset token is invalid or has expired." });
    }

    res.status(200).json({ message: "Token is valid." });
  } catch (error) {
    return serverError(res, error);
  }
});

router.post("/reset-password/:token", async (req, res) => {
  const { password } = req.body;
  try {
    const user = await User.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Password reset token is invalid or has expired." });
    }
    
    if (typeof user.setPassword !== 'function') {
        const bcrypt = require('bcrypt');
        const saltRounds = parseInt(process.env.SALT_ROUNDS, 10) || 10;
        user.password = await bcrypt.hash(password, saltRounds);
    } else {
        await new Promise((resolve, reject) => {
            user.setPassword(password, (err) => {
                if (err) return reject(err);
                resolve();
            });
        });
    }

    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({ message: "Password has been successfully reset." });

  } catch (error) {
    return serverError(res, error);
  }
});

module.exports = router;

