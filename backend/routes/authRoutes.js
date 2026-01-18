const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const authController = require("../controllers/authController.js");

// load environment variables from .env file

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const ACCESS_TOKEN_EXPIRES = process.env.ACCESS_TOKEN_EXPIRES;

// --- Standard Auth Routes ---
router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/send-otp", authController.otp);
router.post("/verify-otp", authController.verifyOtp);

// --- Google OAuth Routes ---
router.get(
    "/google",

    passport.authenticate("google", {
        scope: ["profile", "email"],
    })
);

router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "https://vigy-bag.vercel.app/login",
        session: false,
    }),
    (req, res) => {
        // HIGHLIGHT: DEBUGGING KE LIYE LOGS ADD KIYE GAYE HAIN
        console.log("\n✅ [Google Callback] Route hit successfully.");
        console.log("👤 Google user authenticated:", req.user?._id);

        const payload = {
            sub: req.user._id,
            role: req.user.role || 0,
        };

        const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {
            expiresIn: ACCESS_TOKEN_EXPIRES,
        });

        console.log("🔑 Generated Access Token:", accessToken);
        const username = req.user.username;

        // Set secure HttpOnly cookie
        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });

        const frontendUrl = process.env.FRONTEND_URL || 'https://vigy-bag.vercel.app';
        const redirectUrl = `${frontendUrl}/`;

        console.log(`🚀 Redirecting to frontend: ${redirectUrl}`);
        res.redirect(redirectUrl);
    }
);

module.exports = router;
