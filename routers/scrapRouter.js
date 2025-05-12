const express = require('express');
const router = express.Router();
const scrapController = require('../controllers/scrapController');
const { requireAuth } = require('../middlewares');

router.get('/spots', requireAuth, scrapController.getScrapedSpots);
router.post('/spots/:spotId', requireAuth, scrapController.scrapSpot);
router.delete('/spots/:spotId', requireAuth, scrapController.unscrapSpot);
router.get('/curations', requireAuth, scrapController.getScrapedCurations);
router.post(
  '/curations/:curationId',
  requireAuth,
  scrapController.scrapCuration
);
router.delete(
  '/curations/:curationId',
  requireAuth,
  scrapController.unscrapCuration
);

module.exports = router;
