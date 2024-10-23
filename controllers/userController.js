const { User } = require('../models');

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
