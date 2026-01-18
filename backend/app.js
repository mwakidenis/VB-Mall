// backend/app.js - FINAL WORKING VERSION
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");

// Passport configuration (middleware)
const passport = require("./middlewares/Passport");

// Route imports
const routes = require("./routes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const passwordResetRoutes = require("./routes/passwordResetRoutes");
const adminRegistrationRoutes = require("./routes/adminRegistrationRoutes");
const subscribeRoute = require("./routes/subscribe");

const app = express();

/* ========================
   1. MIDDLEWARE (The Fixes)
======================== */

// FIX: UNIVERSAL CORS (Accepts Port 5173, 5174, etc.) ---
app.use(cors({
  origin: true,        // Automatically allows the caller
  credentials: true,   // Allows cookies/sessions
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Parse JSON
app.use(express.json());

// --- FIX: Session (Memory only, prevents MongoStore crash) ---
app.use(
  session({
    secret: process.env.SESSION_SECRET || "vigybag_secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    }
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

/* ========================
   2. ROUTES
======================== */
app.use("/", routes);
app.use("/auth", authRoutes);
app.use("/api/subscribe", subscribeRoute);
app.use("/api", routes);
app.use("/api", passwordResetRoutes);
app.use("/vpi", userRoutes);
app.use("/api/v1", adminRegistrationRoutes);

/* ========================
   3. EXPORT
======================== */
module.exports = app;