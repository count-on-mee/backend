const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { requireAuth } = require('../middlewares');
const { updateUserValidator } = require('../validators');
const { profileUpload } = require('../configs/multer/multerConfig');

router.get('/me', requireAuth, userController.getUser);
router.patch(
  '/me',
  requireAuth,
  profileUpload.single('profileImg'),
  updateUserValidator,
  userController.updateUser
);

module.exports = router;
