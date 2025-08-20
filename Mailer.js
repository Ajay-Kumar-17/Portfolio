
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send', (req, res) => {
  const { name, company, email, mobile, purpose, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ajaykumarace17@gmail.com',
      pass: 'yltt bxxm pnda xjbr'
    }
  });

const mailOptions = {
  from: 'ajaykumarace17@gmail.com', // your Gmail
  to: 'ajaykumarace17@gmail.com',   // your Gmail
  replyTo: email,                   // user's email
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
    return res.redirect('./error.html');
  }
  console.log("Email sent:", info.response);
  res.redirect('./success.html');
});
});
app.listen(3000, () => console.log('Server running on port localhost:3000'));