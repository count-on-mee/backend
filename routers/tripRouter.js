const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');
const { requireAuth } = require('../middlewares');
const {
  createTripValidator,
  updateTripValidator,
  createItineraryValidator,
  moveItinerariesValidator,
  updateTripDocumentVersionNameValidator,
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
router.post('/:tripId/leave', requireAuth, tripController.leaveTrip);
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
router.get('/:tripId/documents', requireAuth, tripController.getDocuments);
router.get(
  '/:tripId/documents/versions/:tripDocumentVersionId',
  requireAuth,
  tripController.getDocumentVersion
);
router.post(
  '/:tripId/documents/versions',
  requireAuth,
  tripController.createDocumentVersion
);
router.patch(
  '/:tripId/documents/versions/:tripDocumentVersionId',
  requireAuth,
  updateTripDocumentVersionNameValidator,
  tripController.updateDocumentVersionName
);
router.get(
  '/:tripId/documents/expenses',
  requireAuth,
  tripController.getExpenses
);
router.get(
  '/:tripId/documents/accommodations',
  requireAuth,
  tripController.getAccommodations
);
router.get('/:tripId/documents/tasks', requireAuth, tripController.getTasks);

module.exports = router;
