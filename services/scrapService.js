const { where } = require('sequelize');
const {
  Spot,
  SpotImg,
  Curation,
  SpotScrap,
  CurationScrap,
} = require('../models');

const getScrapedSpot = async (userId) => {
  const scrapedSpot = await SpotScrap.findAll({
    where: {
      userId,
      isDeleted: false,
    },
    include: {
      model: Spot,
      as: 'spot',
      include: {
        model: SpotImg,
        as: 'spotImg',
      },
    },
  });
  return scrapedSpot;
};

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

const getScrapedCuration = async (userId) => {
  const scrapedCuration = await CurationScrap.findAll({
    where: {
      userId,
      isDeleted: false,
    },
    include: {
      model: Curation,
      as: 'curation',
    },
  });
  return scrapedCuration;
};

const updateOrCreateCuration = async (userId, curationId) => {
  const existingScrap = await CurationScrap.findOne({
    where: { userId, curationId },
  });
  if (existingScrap) {
    await existingScrap.update({ isDeleted: false });
  } else {
    await CurationScrap.create({ userId, curationId, isDeleted: false });
  }
};

const unscrapCuration = async (userId, curationId) => {
  const existingScrap = await CurationScrap.findOne({
    where: { userId, curationId },
  });
  if (existingScrap) {
    await existingScrap.update({ isDeleted: true });
  }
};

module.exports = {
  getScrapedSpot,
  updateOrCreateScrap,
  unscrapSpot,
  getScrapedCuration,
  updateOrCreateCuration,
  unscrapCuration,
};
