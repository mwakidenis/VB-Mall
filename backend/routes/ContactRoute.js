require('dotenv').config(); //load environment variables
import express from 'express';
import { createTransport } from 'nodemailer';
import { json as _json, urlencoded as _urlencoded } from 'body-parser';
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware to parse JSON bodies
app.use(_json());
app.use(_urlencoded({ extended: true }));

// POST endpoint to handle form submission
app.post('/send-email', async (req, res) => {
  try {
    const { firstName, lastName, email, contactNumber, message } = req.body;

    // Create a transporter using SMTP
    let transporter = createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // SERVER email
        pass: process.env.EMAIL_PASS, // EMAIL password
      },
    });

    // Setup email data
    let mailOptions = {
      from: '"VigyBag" <${process.env.EMAIL_USER}>',
      to: process.env.EMAIL_TO, 
      subject: 'New Contact Form Submission',
      html: `
        <p><b>First Name:</b> ${firstName}</p>
        <p><b>Last Name:</b> ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Contact Number:</b> ${contactNumber}</p>
        <p><b>Message:</b><br>${message}</p>
      `,
    };

    // Send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);
    res.status(200).send('Email sent successfully!');
  } catch (error) {
    console.error('Error occurred:', error.message);
    res.status(500).send('Error sending email.');
  }
});

// Start server
app.listen(PORT, () => {
  const serverAddress = process.env.SERVER_URL || `http://localhost:${PORT}`;
  
  console.log(`🚀 Server is live and running on: ${serverAddress}`);
});

