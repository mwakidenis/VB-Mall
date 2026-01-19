// config/config.js
require("dotenv").config();

const config = {
  port: process.env.PORT || 5000,
  mongoURI: process.env.MONGO_URI,

  // Auth secrets (matching now)
  jwtSecret: process.env.JWT_SECRET,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,

  // Frontend (important for Render + CORS)
  frontendURL: process.env.FRONTEND_URL,

  // Google OAuth
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  googleCallbackURL: process.env.GOOGLE_CALLBACK_URL,
};

module.exports = config;
