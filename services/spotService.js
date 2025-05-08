const { Spot, SpotCategory, SpotImg, SpotScrap } = require('../models');
const { literal } = require('sequelize');

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

exports.getSpots = async (userId, lat, lng, zoom) => {
  const radius = calculateRadius(zoom);

  const spots = await Spot.findAll({
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
      ...(userId
        ? [
            {
              model: SpotScrap,
              as: 'spotScraps',
              attributes: ['userId'],
              where: { userId, isDeleted: false },
              required: false,
            },
          ]
        : []),
    ],
    where: literal(
      `ST_CONTAINS(ST_BUFFER(ST_GeomFromText('POINT(${lat} ${lng})', 4326), ${radius}), location)`
    ),
    order: literal(`
      ST_Distance_Sphere(
        location,
        ST_GeomFromText('POINT(${lat} ${lng})', 4326)
      )
    `),
  });

  return spots;
};
