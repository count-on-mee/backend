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

router.get(
  '/kakao',
  passport.authenticate('kakao', {
    scope: ['profile_nickname', 'account_email', 'profile_image'],
  })
);

router.get(
  '/kakao/callback',
  passport.authenticate('kakao', {
    failureRedirect: '/auth/kakao',
    session: false,
  }),
  authenticate
);

router.get('/naver', passport.authenticate('naver', { authType: 'reprompt' }));

router.get(
  '/naver/callback',
  passport.authenticate('naver', {
    failureRedirect: '/auth/naver',
    session: false,
  }),
  authenticate
);

module.exports = router;
