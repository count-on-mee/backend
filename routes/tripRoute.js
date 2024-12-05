// routes/tripRoute.js
const express = require('express');
const router = express.Router();
const { Trip } = require('../models');

router.post('/create', async (req, res) => {
  const { title, destination, start_date, end_date } = req.body;

  try {
    const newTrip = await Trip.create({
      title,
      destination,
      start_date,
      end_date,
    });

    res.status(201).json({ tripId: newTrip.trip_id });
  } catch (error) {
    console.error('여행 생성 실패:', error);
    res.status(500).json({
      message: '서버 오류',
      error:
        process.env.NODE_ENV === 'production'
          ? '서버 내부 오류'
          : error.message,
    });
  }
});

module.exports = router;
