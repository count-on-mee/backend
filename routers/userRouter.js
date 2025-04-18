const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { requireAuth } = require('../middlewares/authMiddleware');

router.get('/me', requireAuth, userController.getUser);

module.exports = router;
