const {
  Spot,
  SpotCategoryRelation,
  SpotBusinessHour,
  SpotBusinessHourInfo,
  SpotImg,
  SpotCategory,
  SpotScrap,
} = require('../models');
const { literal, where } = require('sequelize');

const getCategories = (spot) => {
  return spot.SpotCategoryRelations.map(
    (relation) => relation.SpotCategory.type
  );
};

const getImgUrls = (spot) => {
  return spot.spotImg.map((img) => img.imgUrl);
};

const getBusinessHours = (spot) => {
  if (!spot.spotBusinessHourInfo) {
    return null;
  }

  return {
    summary: spot.spotBusinessHourInfo.summary,
    info: [
      {
        week: spot.spotBusinessHourInfo.spotBusinessHour.week,
        openTime: spot.spotBusinessHourInfo.spotBusinessHour.openTime,
        closeTime: spot.spotBusinessHourInfo.spotBusinessHour.closeTime,
        breakStartTime:
          spot.spotBusinessHourInfo.spotBusinessHour.breakStartTime,
        breakEndTime: spot.spotBusinessHourInfo.spotBusinessHour.breakEndTime,
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

const getSpotsByLocation = async (userId, lat, lng, zoom) => {
  const radius = calculateRadius(zoom);
  const spots = await Spot.findAll({
    where: literal(
      `ST_CONTAINS(ST_BUFFER(ST_GeomFromText('POINT(${lat} ${lng})', 4326), ${radius}), location)`
    ),
    include: [
      {
        model: SpotCategoryRelation,
        include: [SpotCategory],
      },
      {
        model: SpotBusinessHourInfo,
        as: 'spotBusinessHourInfo',
        include: {
          model: SpotBusinessHour,
          as: 'spotBusinessHour',
        },
      },
      {
        model: SpotImg,
        as: 'spotImg',
      },
    ],
  });

  return await Promise.all(
    spots.map(async (spot) => ({
      spotId: spot.spotId,
      title: spot.title,
      address: spot.address,
      location: getLocation(spot),
      tel: spot.tel,
      categories: getCategories(spot),
      imgUrl: getImgUrls(spot),
      businessHours: getBusinessHours(spot),
      isOpen: true,
      isScraped: userId ? await isScrapedSpot(userId, spot.spotId) : false,
    }))
  );
};

const isScrapedSpot = async (userId, spotId) => {
  const count = await SpotScrap.count({
    where: {
      userId: userId,
      spotId: spotId,
      isDeleted: false,
    },
  });
  return count > 0;
};

const calculateRadius = (zoomLevel) => {
  if (zoomLevel >= 7 && zoomLevel <= 10) {
    return 50000; // 시와 도 수준의 큰 지역
  } else if (zoomLevel >= 11 && zoomLevel <= 13) {
    return 10000; // 구 단위의 행정구역
  } else if (zoomLevel >= 14 && zoomLevel <= 15) {
    return 3000; // 동 단위 수준의 상세 정보
  } else if (zoomLevel >= 16 && zoomLevel <= 19) {
    return 1000; // 거리 및 건물 수준의 디테일
  } else if (zoomLevel >= 20 && zoomLevel <= 21) {
    return 100; // 개별 건물의 입구나 내부 구조
  } else {
    throw new Error('Invalid zoom level');
  }
};

const getSpotById = async (spotId) => {
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
        as: 'spotImg',
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
    isOpen: true,
    isScraped: false,
  };
};

module.exports = {
  calculateRadius,
  getSpotById,
  getLocation,
  getSpotsByLocation,
  getCategories,
  getImgUrls,
  getBusinessHours,
  isScrapedSpot,
};
