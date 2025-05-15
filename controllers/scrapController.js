const scrapService = require('../services/scrapService');
const { ScrapedSpotDto, ScrapedCurationDto } = require('../dtos');

exports.getScrapedSpots = async (req, res) => {
  try {
    const { userId } = req.user;

    const scrapedSpots = await scrapService.getScrapedSpots(userId);

    const scrapedSpotDtos = ScrapedSpotDto.fromMany(scrapedSpots);
    res.status(200).json(scrapedSpotDtos);
  } catch (error) {
    res.status(404).json({
      message: error.message || '스크랩 스팟 조회에 실패했습니다.',
    });
  }
};

exports.scrapSpot = async (req, res) => {
  try {
    const { userId } = req.user;
    const { spotId } = req.params;

    await scrapService.scrapSpot(userId, spotId);

    res.status(201).json({ message: '스팟이 스크랩되었습니다.' });
  } catch (error) {
    res.status(404).json({
      message: error.message || '스팟 스크랩에 실패했습니다.',
    });
  }
};

exports.unscrapSpot = async (req, res) => {
  try {
    const { userId } = req.user;
    const { spotId } = req.params;

    await scrapService.unscrapSpot(userId, spotId);

    res.status(204).json({ message: '스크랩이 삭제되었습니다.' });
  } catch (error) {
    res.status(404).json({
      message: error.message || '스팟 스크랩 삭제에 실패했습니다.',
    });
  }
};

exports.getScrapedCurations = async (req, res) => {
  try {
    const { userId } = req.user;

    const scrapedCurations = await scrapService.getScrapedCurations(userId);

    const scrapedCurationDtos = ScrapedCurationDto.fromMany(scrapedCurations);
    res.status(200).json(scrapedCurationDtos);
  } catch (error) {
    res.status(404).json({
      message: error.message || '큐레이션 스크랩 조회에 실패했습니다.',
    });
  }
};

exports.scrapCuration = async (req, res) => {
  try {
    const { userId } = req.user;
    const { curationId } = req.params;

    await scrapService.scrapCuration(userId, curationId);

    res.status(201).json({ message: '큐레이션이 스크랩되었습니다.' });
  } catch (error) {
    res.status(404).json({
      message: error.message || '큐레이션 스크랩에 실패했습니다.',
    });
  }
};

exports.unscrapCuration = async (req, res) => {
  try {
    const { userId } = req.user;
    const { curationId } = req.params;

    await scrapService.unscrapCuration(userId, curationId);

    res.status(204).json({ message: '큐레이션 스크랩이 삭제되었습니다.' });
  } catch (error) {
    res.status(404).json({
      message: error.message || '큐레이션 스크랩 삭제에 실패했습니다.',
    });
  }
};
