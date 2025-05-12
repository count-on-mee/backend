const express = require('express');
const router = express.Router();
const curationController = require('../controllers/curationController');
const { requireAuth, optionalAuth } = require('../middlewares');
const { createCurationValidator } = require('../validators');

router.post(
  '/',
  requireAuth,
  createCurationValidator,
  curationController.createCuration
);
router.get('/', optionalAuth, curationController.getCurations);
router.get('/:curationId', optionalAuth, curationController.getCurationById);

module.exports = router;
