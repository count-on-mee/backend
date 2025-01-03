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

exports.deleteTrip = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { tripId } = req.params;
    const deleted = await tripService.deleteTrip(userId, tripId);
    if (!deleted) {
      return res.status(404).json({ error: 'trip not found' });
    }
    res.status(200).json({ message: 'trip successfully deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.generateInviteCode = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { tripId } = req.params;
    const inviteCode = await tripService.generateInviteCode(userId, tripId);
    res.status(200).json(inviteCode);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.acceptInvite = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { inviteCode } = req.params;

    const tripId = await tripService.acceptInvite(userId, inviteCode);
    res.status(200).json(tripId);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createSpotCandidate = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { tripId } = req.params;
    const { spotIds: spotIdArray } = req.query;

    const spotIds = spotIdArray.split(',').map((id) => parseInt(id, 10));

    await tripService.createSpotCandidate(userId, tripId, spotIds);
    res.status(201).json({ message: 'spot candidate successfully created' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSpotCandidate = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { tripId } = req.params;

    const spotCandidates = await tripService.getSpotCandidate(userId, tripId);
    res.status(200).json(spotCandidates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
