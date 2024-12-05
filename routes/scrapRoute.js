const express = require('express');

const router = express.Router();
const scrapController = require('../controllers/scrapController');

router.post('/spots/:spotId', scrapController.scrapSpot);
router.delete('/spots/:spotId', scrapController.unscrapSpot);

module.exports = router;
