// admin.js
const { Router } = require('express');
const router = Router();
const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');


router.post('/', async (req, res) => {
 const { email, password } = req.body;

//   console.log("Received email:", email);
//   console.log("Received password:", password);


 try {
   // Find the admin by email
   const admin = await Admin.findOne({ email });
   if (!admin) {
     return res.status(404).json({ message: "Admin not found" });
   }


   // Compare the provided password with the stored hashed password
   const isMatch = await bcrypt.compare(password, admin.password);
   if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }


  // If credentials are valid, send a success response
  res.status(200).json({ message: "Login successful" });
} catch (error) {
  console.error("Error:", error.message);
  res.status(500).json({ message: error.message });
}
});


module.exports = router;


