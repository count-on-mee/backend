const express = require('express');
const auth = require('../middlewares/auth');

const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.createUser);
router.get('/me', auth.verifyToken, userController.getUser);

module.exports = router;
