const express = require('express');

const router = express.Router();
const spotController = require('../controllers/spotController');

router.get('/:spotId', spotController.getSpot);

module.exports = router;
