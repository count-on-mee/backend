const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('../controllers/authController');
const { refreshTokenAuth } = require('../middlewares/authMiddleware');

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
  authController.authenticate
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
  authController.authenticate
);

router.get('/naver', passport.authenticate('naver', { authType: 'reprompt' }));

router.get(
  '/naver/callback',
  passport.authenticate('naver', {
    failureRedirect: '/auth/naver',
    session: false,
  }),
  authController.authenticate
);

router.post('/logout', refreshTokenAuth, authController.logout);
router.post('/reissue', refreshTokenAuth, authController.reissue);

module.exports = router;
