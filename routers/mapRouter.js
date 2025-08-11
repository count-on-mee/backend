const express = require('express');
const router = express.Router();
const mapController = require('../controllers/mapController');
const { geocodeValidator } = require('../validators');

router.get('/geocode', geocodeValidator, mapController.geocode);

module.exports = router;
