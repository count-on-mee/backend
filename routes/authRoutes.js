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
  passport.authenticate('google', { session: false }),
  (req, res) => {
    const token = jwt.sign(
      {
        userId: req.user.user_id,
        name: req.user.name,
        nickname: req.user.nickname,
        email: req.user.email,
        profileImgUrl: req.user.profile_img_url,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      }
    );
    res.json({ token });
  }
);

module.exports = router;
