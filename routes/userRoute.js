const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');
const fileUploadMiddleware = require('../middlewares/fileUpload')
const checkUploadDirectory = require('../middlewares/checkUploadDirectory.js')

router.post('/', userController.createUser);
router.get('/me', userController.getUser);
router.put('/me', fileUploadMiddleware, checkUploadDirectory, userController.updateUser);
router.delete('/me', userController.deleteUser);

module.exports = router;
