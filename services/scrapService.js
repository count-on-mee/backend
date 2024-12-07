const { SpotScrap } = require('../models');

const updateOrCreateScrap = async (userId, spotId) => {
  const existingScrap = await SpotScrap.findOne({ where: { userId, spotId } });
  if (existingScrap) {
    await existingScrap.update({ isDeleted: false });
  } else {
    await SpotScrap.create({ userId, spotId, isDeleted: false });
  }
};

const unscrapSpot = async (userId, spotId) => {
  const existingScrap = await SpotScrap.findOne({
    where: { userId, spotId },
  });
  if (existingScrap) {
    await existingScrap.update({ isDeleted: true });
  }
};

module.exports = {
  updateOrCreateScrap,
  unscrapSpot,
};
