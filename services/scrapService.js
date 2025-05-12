const {
  SpotScrap,
  Spot,
  SpotCategory,
  SpotImg,
  CurationScrap,
  Curation,
  CurationCategory,
} = require('../models');

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

exports.getScrapedCurations = async (userId) => {
  const scrapedCurations = await CurationScrap.findAll({
    where: { userId, isDeleted: false },
    include: [
      {
        model: Curation,
        as: 'curation',
        attributes: ['curationId', 'name', 'description', 'imgUrl'],
        include: [
          {
            model: CurationCategory,
            as: 'curationCategories',
            attributes: ['type'],
            through: { attributes: [] },
          },
        ],
      },
    ],
  });

  return scrapedCurations;
};

exports.scrapCuration = async (userId, curationId) => {
  const existingScrap = await CurationScrap.findOne({
    where: { userId, curationId },
  });

  if (existingScrap) {
    if (!existingScrap.isDeleted) {
      throw new Error('이미 스크랩된 큐레이션입니다.');
    }
    await existingScrap.update({ isDeleted: false });
    return;
  }

  await CurationScrap.create({ userId, curationId });
};

exports.unscrapCuration = async (userId, curationId) => {
  const existingScrap = await CurationScrap.findOne({
    where: { userId, curationId, isDeleted: false },
  });

  if (!existingScrap) {
    throw new Error('스크랩된 큐레이션이 아닙니다.');
  }

  await existingScrap.update({ isDeleted: true });
};
