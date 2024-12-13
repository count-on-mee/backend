const scrapService = require('../services/scrapService');
const { ScrapedSpotsDto, ScrapedCurationsDto } = require('../dtos');

exports.getScrapedSpot = async (req, res) => {
  try {
    const user = req.user;
    const scrapedSpot = await scrapService.getScrapedSpot(user.userId);
    res.status(200).json(ScrapedSpotsDto.of(scrapedSpot));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.scrapSpot = async (req, res) => {
  try {
    const user = req.user;
    const { spotId } = req.params;
    await scrapService.updateOrCreateScrap(user.userId, parseInt(spotId));
    res.status(200).json({ message: 'Scrap updated or created successfully' });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.unscrapSpot = async (req, res) => {
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
};

exports.getScrapedCuration = async (req, res) => {
  try {
    const user = req.user;
    const scrapedCuration = await scrapService.getScrapedCuration(user.userId);
    res.status(200).json(ScrapedCurationsDto.of(scrapedCuration));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.scrapCuration = async (req, res) => {
  try {
    const user = req.user;
    const { curationId } = req.params;
    await scrapService.updateOrCreateCuration(
      user.userId,
      parseInt(curationId)
    );
    res
      .status(200)
      .json({ message: 'Curation updated or created successfully' });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.unscrapCuration = async (req, res) => {
  try {
    const user = req.user;
    const { curationId } = req.params;
    await scrapService.unscrapCuration(user.userId, parseInt(curationId));
    res
      .status(200)
      .json({ message: 'Curation marked as deleted successfully' });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
