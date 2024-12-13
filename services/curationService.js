const {
  Spot,
  SpotCategoryRelation,
  SpotCategory,
  SpotBusinessHour,
  SpotImg,
  Curation,
  CurationSpot,
} = require('../models');
const {
  getCategories,
  getImgUrls,
  getBusinessHours,
  getLocation,
} = require('./spotService');

const getCurationById = async (curationId) => {
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
    spots: curation.CurationSpots.map((curationSpot) => ({
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
        isScraped: false,
      },
    })),
  };
};

const getCurations = async () => {
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

  return curations.map((curation) => {
    return {
      curationId: curation.curationId,
      userId: curation.userId,
      title: curation.title,
      imgUrl: curation.imgUrl,
      spots: curation.CurationSpots.map((curationSpot) => ({
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
          isScraped: false,
        },
      })),
    };
  });
};

module.exports = {
  getCurationById,
  getCurations,
};
