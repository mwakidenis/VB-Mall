const express = require('express');
const router = express.Router();
const AdminRegistration = require('../models/AdminRegistration');
const multer = require('multer');


const upload = multer();


router.post('/vigy_form', upload.fields([
 { name: 'panCard', maxCount: 1 },
 { name: 'addressProof', maxCount: 1 },
 { name: 'profilePicture', maxCount: 1 }
]), async (req, res) => {
 try {
   const {
     fullname,
     dob,
     gender,
     aadhaarNumber,
     email,
     phoneNumber,
     address,
     bankAccountName,
     bankAccountNumber,
     bankName,
     bankBranch,
     ifscCode,
     referralCode,
     promotionalCode
   } = req.body;


   const newRegistration = new AdminRegistration({
     fullname,
     dob,
     gender,
     aadhaarNumber,
     email,
     phoneNumber,
     address,
     bankAccountName,
     bankAccountNumber,
     bankName,
     bankBranch,
     ifscCode,
     referralCode,
     promotionalCode
   });


   if (req.files['panCard']) {
     newRegistration.panCard = {
       data: req.files['panCard'][0].buffer,
       contentType: req.files['panCard'][0].mimetype
     };
   }


   if (req.files['addressProof']) {
     newRegistration.addressProof = {
       data: req.files['addressProof'][0].buffer,
       contentType: req.files['addressProof'][0].mimetype
     };
   }


   if (req.files['profilePicture']) {
     newRegistration.profilePicture = {
       data: req.files['profilePicture'][0].buffer,
       contentType: req.files['profilePicture'][0].mimetype
     };
   }


   await newRegistration.save();
   res.status(200).json({ message: 'Registration successful!' });
 } catch (error) {
   console.error('Registration error:', error);
   res.status(500).json({ message: 'Registration failed', error: error.message });
 }
});


module.exports = router;
