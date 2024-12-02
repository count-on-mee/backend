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

exports.getSpotsByLocation = [
  auth.optionalVerifyToken,
  async (req, res) => {
    try {
      const { lat, lng, zoom } = req.query;
      const userId = req.user.userId;
      const spots = await spotService.getSpotsByLocation(
        parseFloat(lat),
        parseFloat(lng),
        parseInt(zoom),
        userId
      );
      res.status(200).json(spots);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
];
