const { UserDto } = require('../dtos');
const { validate, createUserValidator } = require('../validators');
const userService = require('../services/userService');

exports.createUser = [
  createUserValidator,
  validate,
  async (req, res) => {
    try {
      const user = req.body;
      const createdUser = await userService.createUser(user);
      res.status(201).json(UserDto.of(createdUser));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
];

exports.getUser = async (req, res) => {
  try {
    const user = req.user;
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(UserDto.of(user));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
