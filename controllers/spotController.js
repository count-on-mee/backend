const spotService = require('../services/spotService');
const { SpotDto } = require('../dtos');

exports.getSpots = async (req, res) => {
  try {
    const userId = req.user?.userId;
    const { lat, lng, zoom } = req.query;

    const spots = await spotService.getSpots(
      userId,
      parseFloat(lat),
      parseFloat(lng),
      parseInt(zoom)
    );

    const spotDtos = SpotDto.fromMany(spots);
    res.json(spotDtos);
  } catch (error) {
    res.status(404).json({
      message: error.message || '스팟 조회에 실패했습니다.',
    });
  }
};
