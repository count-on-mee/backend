const express = require('express');
const auth = require('../middlewares/auth');

const router = express.Router();
const spotController = require('../controllers/spotController');

router.get(
  '/search',
  auth.optionalVerifyToken,
  spotController.getSpotsByLocation
);
router.get(
  '/search/trips/:tripId',
  auth.optionalVerifyToken,
  spotController.getSpotsByTripId
);
router.get('/:spotId', spotController.getSpot);

module.exports = router;
