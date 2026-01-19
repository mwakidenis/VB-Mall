const app = require("./app");
const connectDB = require("./config/db");
const config = require("./config/config");

// Connect to MongoDB
connectDB();

// IMPORTANT: Render gives you a PORT. You MUST use it.
const PORT = process.env.PORT || config.port || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
