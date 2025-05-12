const express = require('express');
const router = express.Router();
const curationController = require('../controllers/curationController');
const { requireAuth } = require('../middlewares');
const { createCurationValidator } = require('../validators');

router.post(
  '/',
  requireAuth,
  createCurationValidator,
  curationController.createCuration
);

module.exports = router;
