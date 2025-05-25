const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');
const { requireAuth } = require('../middlewares');
const {
  createTripValidator,
  updateTripValidator,
  createItineraryValidator,
  moveItinerariesValidator,
} = require('../validators');

router.get('/destinations', tripController.getTripDestinations);
router.post('/', requireAuth, createTripValidator, tripController.createTrip);
router.get('/', requireAuth, tripController.getTrips);
router.get('/:tripId', requireAuth, tripController.getTripById);
router.patch(
  '/:tripId',
  requireAuth,
  updateTripValidator,
  tripController.updateTrip
);
router.delete('/:tripId', requireAuth, tripController.deleteTrip);
router.post(
  '/:tripId/itineraries',
  requireAuth,
  createItineraryValidator,
  tripController.createItinerary
);
router.patch(
  '/:tripId/itineraries',
  requireAuth,
  moveItinerariesValidator,
  tripController.moveItineraries
);
router.delete(
  '/:tripId/itineraries/:itineraryId',
  requireAuth,
  tripController.deleteItinerary
);
router.post(
  '/:tripId/invitations',
  requireAuth,
  tripController.createInvitation
);
router.post(
  '/invitations/:invitationCode',
  requireAuth,
  tripController.acceptInvitation
);

module.exports = router;
