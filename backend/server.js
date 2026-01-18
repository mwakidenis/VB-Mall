// server.js
const app = require("./app");
const connectDB = require("./config/db"); // Import the connectDB function from db.js
const config = require("./config/config"); 
// Connect to MongoDB
connectDB();

// Start the server
const PORT = config.port || 30000;
app.listen(PORT, () => {

  const serverAddress = process.env.SERVER_URL || `http://localhost:${PORT}`;
  console.log(`🚀 Server is live and running on: ${serverAddress}`);
});
