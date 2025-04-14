const express = require('express');
const passport = require('passport');
const router = express.Router();
const { authenticate } = require('../controllers/authController');

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/google',
    session: false,
  }),
  authenticate
);

module.exports = router;
