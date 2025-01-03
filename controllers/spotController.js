const auth = require('../middlewares/auth');
const spotService = require('../services/spotService');

exports.getSpot = async (req, res) => {
  try {
    const spotId = req.params.spotId;
    const spot = await spotService.getSpotById(spotId);
    if (spot) {
      res.status(200).json(spot);
    } else {
      res.status(404).json({ message: 'Spot not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSpotsByLocation = async (req, res) => {
  try {
    const userId = req.user?.userId;
    const { lat, lng, zoom } = req.query;
    const spots = await spotService.getSpotsByLocation(
      userId,
      parseFloat(lat),
      parseFloat(lng),
      parseInt(zoom)
    );
    res.status(200).json(spots);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSpotsByTripId = async (req, res) => {
  try {
    const { tripId } = req.params;
    const result = await spotService.getSpotsByTripId(tripId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
