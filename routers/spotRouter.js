const express = require('express');
const router = express.Router();
const spotController = require('../controllers/spotController');
const { requireAuth, optionalAuth } = require('../middlewares');
const { reviewUpload } = require('../configs/multer/multerConfig');
const {
  getSpotValidator,
  createSpotReviewValidator,
  searchSpotValidator,
} = require('../validators');

router.get('/', optionalAuth, getSpotValidator, spotController.getSpots);
router.get(
  '/search',
  optionalAuth,
  searchSpotValidator,
  spotController.searchSpots
);
router.get('/:spotId', optionalAuth, spotController.getSpotById);
router.post(
  '/:spotId/reviews',
  requireAuth,
  reviewUpload.array('reviewImgs'),
  createSpotReviewValidator,
  spotController.createSpotReview
);
router.get('/:spotId/reviews', spotController.getSpotReviewsBySpotId);

module.exports = router;
