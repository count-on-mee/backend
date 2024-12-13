const express = require('express');
const auth = require('../middlewares/auth');

const router = express.Router();
const curationController = require('../controllers/curationController');

router.get('/', auth.optionalVerifyToken, curationController.getCurations);
router.get(
  '/:curationId',
  auth.optionalVerifyToken,
  curationController.getCuration
);

module.exports = router;
