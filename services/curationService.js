const {
  Spot,
  SpotCategoryRelation,
  SpotCategory,
  SpotBusinessHour,
  SpotImg,
  Curation,
  CurationSpot,
  CurationScrap,
} = require('../models');
const {
  getCategories,
  getImgUrls,
  getBusinessHours,
  getLocation,
} = require('./spotService');
const { isScrapedSpot } = require('./spotService');
const getCurationById = async (userId, curationId) => {
  const curation = await Curation.findByPk(curationId, {
    include: [
      {
        model: CurationSpot,
        include: [
          {
            model: Spot,
            include: [
              {
                model: SpotCategoryRelation,
                include: [SpotCategory],
              },
              {
                model: SpotBusinessHour,
              },
              {
                model: SpotImg,
              },
            ],
          },
        ],
      },
    ],
  });

  if (!curation) return null;

  return {
    curationId: curation.curationId,
    userId: curation.userId,
    title: curation.title,
    imgUrl: curation.imgUrl,
    isScraped: userId
      ? await isScrapedCuration(userId, curation.curationId)
      : false,
    spots: await Promise.all(
      curation.CurationSpots.map(async (curationSpot) => ({
        order: curationSpot.order,
        spot: {
          spotId: curationSpot.Spot.spotId,
          title: curationSpot.Spot.title,
          address: curationSpot.Spot.address,
          location: getLocation(curationSpot.Spot),
          tel: curationSpot.Spot.tel,
          categories: getCategories(curationSpot.Spot),
          imgUrl: getImgUrls(curationSpot.Spot),
          businessHours: getBusinessHours(curationSpot.Spot),
          isOpen: false,
          isScraped: userId
            ? await isScrapedSpot(userId, curationSpot.Spot.spotId)
            : false,
        },
      }))
    ),
  };
};

const getCurations = async (userId) => {
  const curations = await Curation.findAll({
    include: [
      {
        model: CurationSpot,
        include: [
          {
            model: Spot,
            include: [
              {
                model: SpotCategoryRelation,
                include: [SpotCategory],
              },
              {
                model: SpotBusinessHour,
              },
              {
                model: SpotImg,
              },
            ],
          },
        ],
      },
    ],
  });

  if (!curations) return null;

  return await Promise.all(
    curations.map(async (curation) => {
      return {
        curationId: curation.curationId,
        userId: curation.userId,
        title: curation.title,
        imgUrl: curation.imgUrl,
        isScraped: userId
          ? await isScrapedCuration(userId, curation.curationId)
          : false,
        spots: await Promise.all(
          curation.CurationSpots.map(async (curationSpot) => ({
            order: curationSpot.order,
            spot: {
              spotId: curationSpot.Spot.spotId,
              title: curationSpot.Spot.title,
              address: curationSpot.Spot.address,
              location: getLocation(curationSpot.Spot),
              tel: curationSpot.Spot.tel,
              categories: getCategories(curationSpot.Spot),
              imgUrl: getImgUrls(curationSpot.Spot),
              businessHours: getBusinessHours(curationSpot.Spot),
              isOpen: false,
              isScraped: userId
                ? await isScrapedSpot(userId, curationSpot.Spot.spotId)
                : false,
            },
          }))
        ),
      };
    })
  );
};

const isScrapedCuration = async (userId, curationId) => {
  const count = await CurationScrap.count({
    where: {
      userId,
      curationId,
      isDeleted: false,
    },
  });
  return count > 0;
};
module.exports = {
  getCurationById,
  getCurations,
};
