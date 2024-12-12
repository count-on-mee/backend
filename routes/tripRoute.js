const express = require('express');
const auth = require('../middlewares/auth');

const router = express.Router();
const tripController = require('../controllers/tripController');

router.post('/', auth.verifyToken, tripController.createTrip);
router.get('/', auth.verifyToken, tripController.getTrips);

module.exports = router;
