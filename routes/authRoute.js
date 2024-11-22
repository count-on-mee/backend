const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    session: false,
    failureRedirect: '/auth/google',
  }),
  (req, res) => {
    const { userId, name, nickname, email, profileImgUrl } = req.user;
    const token = jwt.sign(
      {
        userId,
        name,
        nickname,
        email,
        profileImgUrl,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      }
    );
    res.cookie('token', token, {});
    res.redirect('http://localhost:5173/map');
  }
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
    session: false,
    failureRedirect: '/auth/kakao',
  }),
  (req, res) => {
    const { userId, name, nickname, email, profileImgUrl } = req.user;
    const token = jwt.sign(
      {
        userId,
        name,
        nickname,
        email,
        profileImgUrl,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      }
    );
    res.cookie('token', token, {});
    res.redirect('http://localhost:5173/map');
  }
);

router.get('/naver', passport.authenticate('naver', { authType: 'reprompt' }));

router.get(
  '/naver/callback',
  passport.authenticate('naver', {
    session: false,
    failureRedirect: '/auth/naver',
  }),
  (req, res) => {
    const { userId, name, nickname, email, profileImgUrl } = req.user;
    const token = jwt.sign(
      {
        userId,
        name,
        nickname,
        email,
        profileImgUrl,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      }
    );
    res.cookie('token', token, {});
    res.redirect('http://localhost:5173/map');
  }
);

module.exports = router;
