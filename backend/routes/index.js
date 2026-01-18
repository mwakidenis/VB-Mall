// index.js
const express = require("express");
const router = express.Router();
const authRoutes = require("./authRoutes");
const subscribeRouter = require("./subscribe");
const productRoutes = require("./products");

router.use("/auth", authRoutes);
router.use("/subscribe", subscribeRouter); // ← add this
router.use("/products", productRoutes);

module.exports = router;
