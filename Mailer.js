const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname))); // serve static files (CSS, JS, images)

// Serve homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form
app.post('/send', (req, res) => {
  const { name, company, email, mobile, purpose, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `${company} + ${purpose}`,
    text: `
      Name: ${name}
      Mobile: ${mobile}
      Email: ${email}
      Message: ${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email error:", error);
      return res.redirect('/error.html'); // use absolute path, not relative
    }
    console.log("Email sent:", info.response);
    res.redirect('/success.html'); // use absolute path
  });
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
