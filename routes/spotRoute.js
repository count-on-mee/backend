const express = require('express');
const auth = require('../middlewares/auth');

const router = express.Router();
const spotController = require('../controllers/spotController');

const fileUpload = require('../middlewares/fileUpload')
const checkUploadDirectory = require('../middlewares/checkUploadDirectory.js')

router.get(
  '/search',
  auth.optionalVerifyToken,
  spotController.getSpotsByLocation
);
router.get('/:spotId', spotController.getSpot);

router.get('/:spotId/photodump', spotController.getPhotoDump);

router.post('/:spotId/photodump', fileUpload.array('photos', 10), checkUploadDirectory, spotController.addPhotoDump);


module.exports = router;
