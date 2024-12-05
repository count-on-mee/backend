const auth = require('../middlewares/auth');
const scrapService = require('../services/scrapService');

exports.scrapSpot = [
  auth.verifyToken,
  async (req, res) => {
    try {
      const user = req.user;
      const { spotId } = req.params;
      await scrapService.updateOrCreateScrap(user.userId, parseInt(spotId));
      res
        .status(200)
        .json({ message: 'Scrap updated or created successfully' });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
];

exports.unscrapSpot = [
  auth.verifyToken,
  async (req, res) => {
    try {
      const user = req.user;
      const { spotId } = req.params;
      await scrapService.unscrapSpot(user.userId, parseInt(spotId));
      res.status(200).json({ message: 'Scrap marked as deleted successfully' });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
];
