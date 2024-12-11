const express = require('express');
const auth = require('../middlewares/auth');

const router = express.Router();
const scrapController = require('../controllers/scrapController');

router.post('/spots/:spotId', auth.verifyToken, scrapController.scrapSpot);
router.delete('/spots/:spotId', auth.verifyToken, scrapController.unscrapSpot);

module.exports = router;
