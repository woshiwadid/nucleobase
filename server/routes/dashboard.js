const express = require('express');
const middleware = require('../middleware');

const router = express.Router();

router.route('/')
  .get(middleware.auth.verify, (req, res) => {
    res.render('index.ejs', {
      loggedIn: true
    });
  });

router.route('/profile')
  .get(middleware.auth.verify, (req, res) => {
    res.render('index.ejs', {
      loggedIn: true
    });
  });

router.route('/schedule')
  .get(middleware.auth.verify, (req, res) => {
    res.render('index.ejs', {
      loggedIn: true
    });
  });

router.route('/trainers')
  .get(middleware.auth.verify, (req, res) => {
    res.render('index.ejs', {
      loggedIn: true
    });
  });

router.route('/clients')
  .get(middleware.auth.verify, (req, res) => {
    res.render('index.ejs', {
      loggedIn: true
    });
  });

module.exports = router;