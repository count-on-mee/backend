// filepath: /Users/insoo/Git/count-on-me/backend/routers/tripDocumentRouter.js
const express = require('express');
const router = express.Router();
const tripDocumentController = require('../controllers/tripDocumentController');
const { requireAuth } = require('../middlewares');

// 여행 ID로 문서 데이터 조회 (비용, 스팟, 할일)
router.get('/:tripId', requireAuth, tripDocumentController.getTripDocument);

// 여행 ID로 새 문서 생성
router.post('/:tripId', requireAuth, tripDocumentController.createTripDocument);

module.exports = router;
