const express = require('express');
const auth = require('../middlewares/auth');

const router = express.Router();
const scrapController = require('../controllers/scrapController');

router.get('/spots', auth.verifyToken, scrapController.getScrapedSpot);
router.post('/spots/:spotId', auth.verifyToken, scrapController.scrapSpot);
router.delete('/spots/:spotId', auth.verifyToken, scrapController.unscrapSpot);
router.get('/curations', auth.verifyToken, scrapController.getScrapedCuration);
router.post(
  '/curations/:curationId',
  auth.verifyToken,
  scrapController.scrapCuration
);
router.delete(
  '/curations/:curationId',
  auth.verifyToken,
  scrapController.unscrapCuration
);

module.exports = router;
