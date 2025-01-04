const { UserDto } = require('../dtos');
const { validate, createUserValidator, updateUserValidator } = require('../validators');
const auth = require('../middlewares/auth');
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
      res.status(500).json({ error: error.message });
    }
  },
];

exports.getUser = [
  auth.verifyToken,
  async (req, res) => {
    try {
      const user = req.user;
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.status(200).json(UserDto.of(user));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
];

exports.updateUser = [
  updateUserValidator,
  validate,
  auth.verifyToken,
  async (req, res) => {
    try {
      const userId = req.user?.userId;
      if (!userId) {
        return res.status(400).json({ error: "Invalid userId"});
      }
      
      const { nickname } = req.body;
      const file = req.file;

      console.log('Nickname:', nickname);
      console.log('File:', file);
    
      if (!nickname && !file) {
        console.log('Both nickname and file are missing');
        return res.status(400).json({ error: "No data to update" });
      }

      const user = await userService.findOne({ where: { userId: userId } });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const updatedData = {};
      if (nickname) {
        updatedData.nickname = nickname;
      }

      console.log(file);

      if (file) {
        console.log('File detected:', file.filename);
       
        const baseUrl = `${req.protocol}://${req.get('host')}`;
          updatedData.profileImgUrl = `${baseUrl}/uploads/${file.filename}`;
          console.log('Updated profileImgUrl set to:', updatedData.profileImgUrl);
        } 

        const updatedUser = await userService.updateUser(userId, updatedData);
        if (!updatedUser) {
          return res.status(404).json({ error: 'User not found or not updated'});
        }
  
      res.status(200).json(UserDto.of(updatedUser));

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
];

exports.deleteUser = [
  auth.verifyToken,
  async (req, res) => {
    try {
      const userId = req.user.id;
      const deleted = await userService.deleteUser(userId);
      if(!deleted) {
        return res.status(404).json({ error: "user not found" });
      }
      res.status(200).json({ message: "user successfully deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
];
