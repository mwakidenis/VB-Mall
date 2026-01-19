// backend/config/config.js  — CLEAN + RENDER SAFE

require("dotenv").config();

const config = {
  // 🔹 IMPORTANT: Use Render's PORT if provided
  port: process.env.PORT || 10000,

  mongoURI: process.env.MONGO_URI,

  // ===== Auth secrets =====
  jwtSecret: process.env.JWT_SECRET,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
  sessionSecret: process.env.SESSION_SECRET,

  // ===== Frontend (for CORS) =====
  frontendURL: process.env.FRONTEND_URL,

  // ===== Google OAuth =====
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  googleCallbackURL: process.env.GOOGLE_CALLBACK_URL,
};

module.exports = config;
