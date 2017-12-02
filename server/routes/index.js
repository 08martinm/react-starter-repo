const express = require('express');
const router = express.Router();
const passport = require('../utils/passport.js');
const Login = require('./login');
const Reset = require('./reset');
const path = require('path');

// Home
router.get('/', function (req, res) {
  console.log('pathToHomePage is', pathToHomePage);
  res.render('index');
});

// Login
router.get('/login', Login.auth);
router.post('/login', Login.signup);
router.put('/login', passport.authenticate('local'), Login.login);
// router.delete('/login', Login.deleteAccount);

// Reset Password
router.get('/reset', Reset.post);
router.patch('/reset/:token', Reset.patch);

// Logout
// router.get('/logout', Logout.get);

module.exports = router;
