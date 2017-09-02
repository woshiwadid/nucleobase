const express = require('express');
const middleware = require('../middleware');

const router = express.Router();

router.route('/')
  .get(middleware.auth.verify, (req, res) => {
    res.render('index.ejs');
  });

router.route('/edit')
  .get(middleware.auth.verify, (req, res) => {
    res.render('index.ejs');
  });

router.route('/schedule')
  .get(middleware.auth.verify, (req, res) => {
    res.render('index.ejs');
  });

router.route('/trainers')
  .get(middleware.auth.verify, (req, res) => {
    res.render('index.ejs');
  });

router.route('/clients')
  .get(middleware.auth.verify, (req, res) => {
    res.render('index.ejs');
  });

module.exports = router;