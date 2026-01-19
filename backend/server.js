// server.js
const app = require("./app");
const connectDB = require("./config/db");

// Connect to MongoDB
connectDB();

// 🚨 IMPORTANT FIX: Always trust Render's PORT first
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
