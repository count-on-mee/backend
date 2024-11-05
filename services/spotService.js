const { Spot } = require('../models');

exports.getSpotById = async (spotId) => {
  return await Spot.findByPk(spotId);
};
