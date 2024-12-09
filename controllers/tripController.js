const auth = require('../middlewares/auth');
const tripService = require('../services/tripService');

exports.createTrip = [
  auth.verifyToken,
  async (req, res) => {
    try {
      const userId = req.user.userId;
      const { title, destination, startDate, endDate, spotIds } = req.body;
      const newTrip = await tripService.createTrip({
        userId,
        title,
        destination,
        startDate,
        endDate,
        spotIds,
      });

      //TODO: response body에 tripId, day별 spot (order 포함)
      res.status(201).json({ tripId: newTrip.tripId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
];
