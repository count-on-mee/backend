const express = require('express');
const router = express.Router();
const scrapController = require('../controllers/scrapController');
const { requireAuth } = require('../middlewares');

router.get('/spots', requireAuth, scrapController.getScrapedSpots);
router.post('/spots/:spotId', requireAuth, scrapController.scrapSpot);
router.delete('/spots/:spotId', requireAuth, scrapController.unscrapSpot);

module.exports = router;
