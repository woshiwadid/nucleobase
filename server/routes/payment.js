'use strict';
const express = require('express');
const middleware = require('../middleware');
const path = require('path');


const router = express.Router();

router.route('/')
  .get(middleware.auth.verify, (req, res) => {
    res.sendFile(path.join(__dirname + '/../../public/dist/index.html'));
});

module.exports = router;