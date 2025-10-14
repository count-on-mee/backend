const express = require('express');
const router = express.Router();
const mapController = require('../controllers/mapController');
const { geocodeValidator, directionsValidator } = require('../validators');
const { requireAuth } = require('../middlewares');

router.get('/geocode', requireAuth, geocodeValidator, mapController.geocode);
router.post(
  '/directions/naver',
  requireAuth,
  directionsValidator,
  mapController.getNaverMapDirections
);

module.exports = router;
