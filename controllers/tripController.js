const auth = require('../middlewares/auth');
const tripService = require('../services/tripService');
const { TripsDto } = require('../dtos');

exports.createTrip = async (req, res) => {
  try {
    const userId = req.user.userId;
    const tripData = req.body;
    const newTrip = await tripService.createTrip(userId, tripData);

    //TODO: response body에 tripId, day별 spot (order 포함)
    res.status(201).json({ tripId: newTrip.tripId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTrips = async (req, res) => {
  try {
    const userId = req.user.userId;
    const trips = await tripService.getTrips(userId);

    res.status(200).json(TripsDto.of(trips));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTrip = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { tripId } = req.params;

    const trip = await tripService.getTrip(userId, tripId);
    res.status(200).json(trip);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
