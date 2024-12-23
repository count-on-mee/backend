const curationService = require('../services/curationService');

exports.getCuration = async (req, res) => {
  try {
    const userId = req.user?.userId;
    const curationId = req.params.curationId;
    const curation = await curationService.getCurationById(userId, curationId);
    if (curation) {
      res.status(200).json(curation);
    } else {
      res.status(404).json({ message: 'Curation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCurations = async (req, res) => {
  try {
    const userId = req.user?.userId;
    const curations = await curationService.getCurations(userId);
    if (curations) {
      res.status(200).json(curations);
    } else {
      res.status(404).json({ message: 'Curation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
