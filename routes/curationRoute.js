const express = require('express');

const router = express.Router();
const curationController = require('../controllers/curationController');

router.get('/', curationController.getCurations);
router.get('/:curationId', curationController.getCuration);

module.exports = router;
