const express = require('express');
const router = express.Router();
const spotController = require('../controllers/spotController');
const { requireAuth, optionalAuth, adminAuth } = require('../middlewares');
const { reviewUpload, spotUpload } = require('../configs/multer/multerConfig');
const {
  getSpotValidator,
  createSpotReviewValidator,
  searchSpotValidator,
  createSpotValidator,
} = require('../validators');

router.get('/', optionalAuth, getSpotValidator, spotController.getSpots);
router.post(
  '/',
  adminAuth,
  spotUpload.array('spotImgs'),
  createSpotValidator,
  spotController.createSpot
);
router.get(
  '/search',
  optionalAuth,
  searchSpotValidator,
  spotController.searchSpots
);
router.get('/reviews/me', requireAuth, spotController.getMySpotReviews);
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
