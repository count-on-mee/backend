const express = require('express');
const router = express.Router();
const curationController = require('../controllers/curationController');
const { requireAuth, optionalAuth } = require('../middlewares');
const {
  createCurationValidator,
  searchCurationValidator,
} = require('../validators');

router.post(
  '/',
  requireAuth,
  createCurationValidator,
  curationController.createCuration
);
router.get('/me', requireAuth, curationController.getMyCurations);
router.get('/', optionalAuth, curationController.getCurations);
router.get(
  '/search',
  optionalAuth,
  searchCurationValidator,
  curationController.searchCurations
);
router.get('/:curationId', optionalAuth, curationController.getCurationById);

module.exports = router;
