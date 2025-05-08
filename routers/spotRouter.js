const express = require('express');
const router = express.Router();
const spotController = require('../controllers/spotController');
const { optionalAuth } = require('../middlewares');
const { getSpotValidator } = require('../validators');

router.get('/', optionalAuth, getSpotValidator, spotController.getSpots);

module.exports = router;
