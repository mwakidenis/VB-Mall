// config/db.js
const mongoose = require("mongoose");
const config = require("./config"); // Import config.js from the same directory

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
