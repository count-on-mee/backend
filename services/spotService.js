const {
  sequelize,
  User,
  Spot,
  SpotCategory,
  SpotImg,
  SpotScrap,
  SpotReview,
  SpotReviewImg,
} = require('../models');
const { literal, Op } = require('sequelize');

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

const getSpotCategoryIds = async (spotCategories) => {
  let spotCategoryIds = [];

  if (spotCategories && spotCategories.length > 0) {
    const selectedCategories = await SpotCategory.findAll({
      where: {
        type: spotCategories,
      },
    });

    spotCategoryIds = selectedCategories.map((cat) => cat.spotCategoryId);

    const complexCultureSpace = selectedCategories.find(
      (cat) => cat.type === '복합 문화 공간'
    );
    if (complexCultureSpace) {
      const childCategories = await SpotCategory.findAll({
        where: {
          parentSpotCategoryId: complexCultureSpace.spotCategoryId,
        },
      });
      spotCategoryIds = [
        ...spotCategoryIds,
        ...childCategories.map((cat) => cat.spotCategoryId),
      ];
    }
  }

  return spotCategoryIds;
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
      {
        model: SpotScrap,
        as: 'spotScraps',
        attributes: ['userId'],
        where: { isDeleted: false },
        required: false,
      },
      ...(userId
        ? [
            {
              model: SpotScrap,
              as: 'userSpotScrap',
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

exports.getSpotById = async (userId, spotId) => {
  const spot = await Spot.findByPk(spotId, {
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
      {
        model: SpotScrap,
        as: 'spotScraps',
        attributes: ['userId'],
        where: { isDeleted: false },
        required: false,
      },
      ...(userId
        ? [
            {
              model: SpotScrap,
              as: 'userSpotScrap',
              attributes: ['userId'],
              where: { userId, isDeleted: false },
              required: false,
            },
          ]
        : []),
    ],
  });

  return spot;
};

exports.createSpotReview = async (userId, spotId, content, reviewImages) => {
  const transaction = await sequelize.transaction();
  try {
    const review = await SpotReview.create(
      {
        userId,
        spotId,
        content,
      },
      { transaction }
    );

    if (reviewImages && reviewImages.length > 0) {
      await Promise.all(
        reviewImages.map((reviewImage) =>
          SpotReviewImg.create(
            {
              spotReviewId: review.spotReviewId,
              imgUrl: reviewImage.location,
            },
            { transaction }
          )
        )
      );
    }

    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

exports.getSpotReviewsBySpotId = async (spotId) => {
  const spotReviews = await SpotReview.findAll({
    where: { spotId },
    include: [
      {
        model: SpotReviewImg,
        as: 'spotReviewImgs',
        attributes: ['imgUrl'],
      },
      {
        model: User,
        as: 'user',
        attributes: ['userId', 'nickname', 'profileImgUrl'],
      },
    ],
  });

  return spotReviews;
};

exports.searchSpots = async (userId, spotName, spotCategories) => {
  const spotCategoryIds = await getSpotCategoryIds(spotCategories);

  const spots = await Spot.findAll({
    attributes: ['spotId', 'name', 'address', 'tel', 'location'],
    include: [
      {
        model: SpotCategory,
        as: 'spotCategories',
        attributes: ['type'],
        through: { attributes: [] },
        ...(spotCategoryIds.length > 0 && {
          where: {
            spotCategoryId: spotCategoryIds,
          },
        }),
      },
      {
        model: SpotImg,
        as: 'spotImgs',
        attributes: ['imageUrl'],
      },
      {
        model: SpotScrap,
        as: 'spotScraps',
        attributes: ['userId'],
        where: { isDeleted: false },
        required: false,
      },
      ...(userId
        ? [
            {
              model: SpotScrap,
              as: 'userSpotScrap',
              attributes: ['userId'],
              where: { userId, isDeleted: false },
              required: false,
            },
          ]
        : []),
    ],
    ...(spotName && {
      where: {
        name: {
          [Op.like]: `%${spotName}%`,
        },
      },
    }),
  });

  return spots;
};
