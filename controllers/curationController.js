const curationService = require('../services/curationService');

exports.getCuration = async (req, res) => {
  try {
    const curationId = req.params.curationId;
    const curation = await curationService.getCurationById(curationId);
    if (curation) {
      res.status(200).json(curation);
    } else {
      res.status(404).json({ message: 'Curation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
