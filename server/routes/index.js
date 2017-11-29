const router = require('express').Router();
const passport = require('../passport.js');
const Login = require('./login');
const Reset = require('./reset');
const path = require('path');
let pathToHomePage = path.join(__dirname, '../', 'public', 'index.html');

// Home
router.get('/', (req, res) => res.sendFile(pathToHomePage));

// Login
router.get('/login', Login.auth);
router.post('/login', Login.signup);
router.put('/login', passport.authenticate('local'), Login.login);
router.delete('/login', Login.deleteAccount);

// Reset Password
router.get('/reset', Reset.post);
router.patch('/reset/:token', Reset.patch);

// Logout
router.get('/logout', Logout.get);

module.exports = router;
