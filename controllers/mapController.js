const mapService = require('../services/mapService');

exports.geocode = async (req, res) => {
  try {
    const { address } = req.query;

    const { latitude, longitude } = await mapService.geocodeAddress(address);

    res.status(200).json({ latitude, longitude });
  } catch (error) {
    res.status(400).json({
      message: error.message || '주소를 좌표로 변환하는 데 실패했습니다.',
    });
  }
};
