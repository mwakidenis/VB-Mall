// backend/app.js — FINAL WORKING VERSION FOR RENDER

require("dotenv").config();
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

const app = express(); // ✅ APP MUST BE CREATED FIRST

// ✅ Root route (Render health check + browser test)
app.get("/", (req, res) => {
  res.send("✅ VigyBag Backend is Live on Render!");
});

/* ========================
   1. MIDDLEWARE (The Fixes)
======================== */

// ✅ FIX: CORS (Allow Cloudflare frontend + any port)
app.use(
  cors({
    origin: true,      // Accept requests from Cloudflare Pages
    credentials: true, // Allow cookies/sessions
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Parse JSON requests
app.use(express.json());

// ✅ FIX: Safe session (no MongoStore to avoid crashes)
app.use(
  session({
    secret: process.env.SESSION_SECRET || "vigybag_secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      secure: false, // must be false on Render free tier
      httpOnly: true,
    },
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
