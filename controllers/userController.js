const { User } = require('../models');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
  try {
    const { name } = req.body;
    const user = await User.create({
      name,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUser = async (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) return res.status(403).send('No token provided.');

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(500).send('Failed to authenticate token.');
    res.json({
      userId: decoded.userId,
      name: decoded.name,
      nickname: decoded.nickname,
      email: decoded.email,
      profileImgUrl: decoded.profileImgUrl,
    });
  });
};
