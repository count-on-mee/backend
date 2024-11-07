const {
  Spot,
  SpotCategoryRelation,
  SpotBusinessHour,
  SpotImg,
  SpotCategory,
} = require('../models');

const getCategories = (spot) => {
  return spot.SpotCategoryRelations.map(
    (relation) => relation.SpotCategory.type
  );
};

const getImgUrls = (spot) => {
  return spot.SpotImgs.map((img) => img.imgUrl);
};

const getBusinessHours = (spot) => {
  if (!spot.SpotBusinessHour) {
    return null;
  }

  return {
    summary: spot.SpotBusinessHour.summary,
    info: [
      {
        week: spot.SpotBusinessHour.week,
        openTime: spot.SpotBusinessHour.openTime,
        closeTime: spot.SpotBusinessHour.closeTime,
        breakStartTime: spot.SpotBusinessHour.breakStartTime,
        breakEndTime: spot.SpotBusinessHour.breakEndTime,
      },
    ],
  };
};

const getLocation = (spot) => {
  return {
    lat: spot.location.coordinates[1],
    lng: spot.location.coordinates[0],
  };
};

exports.getSpotById = async (spotId) => {
  const spot = await Spot.findByPk(spotId, {
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
  });

  if (!spot) {
    return null;
  }

  //TODO: isOpen, isScraped
  return {
    spotId: spot.spotId,
    title: spot.title,
    address: spot.address,
    location: getLocation(spot),
    tel: spot.tel,
    categories: getCategories(spot),
    imgUrl: getImgUrls(spot),
    businessHours: getBusinessHours(spot),
    isOpen: false,
    isScraped: false,
  };
};
