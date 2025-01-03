const express = require('express');
const auth = require('../middlewares/auth');

const router = express.Router();
const tripController = require('../controllers/tripController');

router.post('/', auth.verifyToken, tripController.createTrip);
router.get('/', auth.verifyToken, tripController.getTrips);
router.get('/:tripId', auth.verifyToken, tripController.getTrip);
router.delete('/:tripId', auth.verifyToken, tripController.deleteTrip);
router.post(
  '/:tripId/invite',
  auth.verifyToken,
  tripController.generateInviteCode
);
router.post(
  '/invite/:inviteCode',
  auth.verifyToken,
  tripController.acceptInvite
);
router.post(
  '/:tripId/documents/spot-candidates',
  auth.verifyToken,
  tripController.createSpotCandidate
);
router.get(
  '/:tripId/documents/spot-candidates',
  auth.verifyToken,
  tripController.getSpotCandidate
);

module.exports = router;
