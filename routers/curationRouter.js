const express = require('express');
const router = express.Router();
const curationController = require('../controllers/curationController');
const { requireAuth, optionalAuth } = require('../middlewares');
const {
  createCurationValidator,
  searchCurationValidator,
  updateCurationValidator,
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
router.patch(
  '/:curationId',
  requireAuth,
  updateCurationValidator,
  curationController.updateCuration
);
router.delete('/:curationId', requireAuth, curationController.deleteCuration);

module.exports = router;
