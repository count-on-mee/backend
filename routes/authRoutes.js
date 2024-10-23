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

router.get('/me', (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(403).send('No token provided.');

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(500).send('Failed to authenticate token.');
    res.json({
      userId: decoded.userId,
      name: decoded.name,
      email: decoded.email,
      profileImgUrl: decoded.profileImgUrl,
    });
  });
});

module.exports = router;
