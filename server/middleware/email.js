'use strict';
const nodemailer = require('nodemailer');
const email = require('config')['email'];

module.exports.send = (sender, receiver, subject, text) => {

  console.log(sender);
  console.log(receiver);
  console.log(subject);
  console.log(text);


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
    to: receiver,
    subject: subject, //'Sending Email using Node.js',
    text: 'sender: ' + sender + '\n' + text //'That was easy!'
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};