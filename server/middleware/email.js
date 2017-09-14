'use strict';
const nodemailer = require('nodemailer');
const email = require('config')['email'];

module.exports.send = (senderDisplay, senderEmail, receiverDisplay, receiverEmail, subject, text) => {

  // Send email
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'atcg.nucleobase@gmail.com',
      pass: email.pwd
    }
  });

  var mailOptions = {
    from: 'Trainer Finder',
    to: receiverEmail,
    subject: subject,
    text: `Hi ${receiverDisplay},\n\nYou received a message from ${senderDisplay}:\n"${text}"\n${senderDisplay} email: ${senderEmail}\n\nSincerely,\nTrainer Finder`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};