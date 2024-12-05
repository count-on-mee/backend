const tripService = require('../services/tripService');

exports.createTrip = async (req, res) => {
  try {
    const { title, destination, startDate, endDate } = req.body;
    const newTrip = await tripService.createTrip({
      title,
      destination,
      startDate,
      endDate,
    });
    res.status(201).json({ tripId: newTrip.tripId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
