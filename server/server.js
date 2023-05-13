const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();
const cors = require('cors'); 

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/contact', (req, res) => {
  const formDetails = req.body;

  sendEmail(formDetails)
    .then(() => {
      res.json({ code: 200, message: 'Message sent successfully' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ code: 500, message: 'Something went wrong, please try again later.' });
    });
});

function sendEmail(formDetails) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: 'outlook',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASSWORD, 
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'camilacslopes@gmail.com',
      subject: 'Novo contato do formulário',
      text: JSON.stringify(formDetails),
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log('Email sent: ' + info.response);
        resolve();
      }
    });
  }).catch((error) => {
    console.error(error);
    throw error;
  });
}

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
