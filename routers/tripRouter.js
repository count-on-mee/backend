const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');
const { requireAuth } = require('../middlewares');
const { createTripValidator } = require('../validators');

router.get('/destinations', tripController.getTripDestinations);
router.post('/', requireAuth, createTripValidator, tripController.createTrip);
router.get('/', requireAuth, tripController.getTrips);
router.get('/:tripId', requireAuth, tripController.getTripById);

module.exports = router;
