const { SpotScrap, Spot, SpotCategory, SpotImg } = require('../models');

exports.getScrapedSpots = async (userId) => {
  const scrapedSpots = await SpotScrap.findAll({
    where: { userId, isDeleted: false },
    include: [
      {
        model: Spot,
        as: 'spot',
        attributes: ['spotId', 'name', 'address', 'tel', 'location'],
        include: [
          {
            model: SpotCategory,
            as: 'spotCategories',
            attributes: ['type'],
            through: { attributes: [] },
          },
          {
            model: SpotImg,
            as: 'spotImgs',
            attributes: ['imageUrl'],
          },
        ],
      },
    ],
  });

  return scrapedSpots;
};

exports.scrapSpot = async (userId, spotId) => {
  const existingScrap = await SpotScrap.findOne({
    where: { userId, spotId },
  });

  if (existingScrap) {
    if (!existingScrap.isDeleted) {
      throw new Error('이미 스크랩된 스팟입니다.');
    }
    await existingScrap.update({ isDeleted: false });
    return;
  }

  await SpotScrap.create({ userId, spotId });
};

exports.unscrapSpot = async (userId, spotId) => {
  const existingScrap = await SpotScrap.findOne({
    where: { userId, spotId, isDeleted: false },
  });

  if (!existingScrap) {
    throw new Error('스크랩된 스팟이 아닙니다.');
  }

  await existingScrap.update({ isDeleted: true });
};
