const {
  sequelize,
  Spot,
  SpotImg,
  SpotCategory,
  SpotScrap,
  Curation,
  CurationCategory,
  CurationCategoryRelation,
  CurationSpot,
  CurationScrap,
} = require('../models');
const { Op } = require('sequelize');

const getCurationCategoryIds = async (categories) => {
  const curationCategories = await CurationCategory.findAll({
    where: { type: categories },
  });
  return curationCategories.map(
    (curationCategory) => curationCategory.curationCategoryId
  );
};

const getRandomSpotImg = async (spots) => {
  const spotImgs = await SpotImg.findAll({
    where: {
      spotId: spots.map((spot) => spot.spotId),
    },
  });
  const availableImgs = spotImgs.map((spotImage) => spotImage.imageUrl);

  return availableImgs.length > 0
    ? availableImgs[Math.floor(Math.random() * availableImgs.length)]
    : 'https://ldb-phinf.pstatic.net/20250331_231/1743389842066rr70u_PNG/1-3.png';
};

exports.createCuration = async (
  userId,
  name,
  description,
  categories,
  spots
) => {
  const transaction = await sequelize.transaction();

  try {
    const imgUrl = await getRandomSpotImg(spots);
    const curation = await Curation.create({
      userId,
      name,
      description,
      imgUrl,
    });

    const curationCategoryIds = await getCurationCategoryIds(categories);
    if (curationCategoryIds && curationCategoryIds.length > 0) {
      const curationCategories = curationCategoryIds.map(
        (curationCategoryId) => ({
          curationId: curation.curationId,
          curationCategoryId,
        })
      );
      await CurationCategoryRelation.bulkCreate(curationCategories);
    } else {
      throw new Error('카테고리가 존재하지 않습니다.');
    }

    if (spots && spots.length > 0) {
      const curationSpots = spots.map((spot) => ({
        curationId: curation.curationId,
        spotId: spot.spotId,
        order: spot.order,
      }));
      await CurationSpot.bulkCreate(curationSpots);
    } else {
      throw new Error('스팟이 존재하지 않습니다.');
    }

    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

exports.getCurations = async (userId) => {
  const curations = await Curation.findAll({
    attributes: ['curationId', 'name', 'description', 'imgUrl'],
    include: [
      {
        model: CurationCategory,
        as: 'curationCategories',
        attributes: ['type'],
        through: { attributes: [] },
      },
      {
        model: CurationSpot,
        as: 'curationSpots',
        attributes: ['spotId', 'order'],
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
          },
        ],
      },
      {
        model: CurationScrap,
        as: 'curationScraps',
        attributes: ['userId'],
        where: { isDeleted: false },
        required: false,
      },
      ...(userId
        ? [
            {
              model: CurationScrap,
              as: 'userCurationScrap',
              attributes: ['userId'],
              where: { userId, isDeleted: false },
              required: false,
            },
          ]
        : []),
    ],
    order: [['curationSpots', 'order', 'ASC']],
  });

  return curations;
};

exports.getCurationById = async (userId, curationId) => {
  const curation = await Curation.findByPk(curationId, {
    attributes: ['curationId', 'name', 'description', 'imgUrl'],
    include: [
      {
        model: CurationCategory,
        as: 'curationCategories',
        attributes: ['type'],
        through: { attributes: [] },
      },
      {
        model: CurationSpot,
        as: 'curationSpots',
        attributes: ['spotId', 'order'],
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
          },
        ],
      },
      {
        model: CurationScrap,
        as: 'curationScraps',
        attributes: ['userId'],
        where: { isDeleted: false },
        required: false,
      },
      ...(userId
        ? [
            {
              model: CurationScrap,
              as: 'userCurationScrap',
              attributes: ['userId'],
              where: { userId, isDeleted: false },
              required: false,
            },
          ]
        : []),
    ],
    order: [['curationSpots', 'order', 'ASC']],
  });

  return curation;
};

exports.searchCurations = async (userId, curationName, curationCategories) => {
  const curations = await Curation.findAll({
    attributes: ['curationId', 'name', 'description', 'imgUrl'],
    include: [
      {
        model: CurationCategory,
        as: 'curationCategories',
        attributes: ['type'],
        through: { attributes: [] },
        ...(curationCategories.length > 0 && {
          where: {
            type: curationCategories,
          },
        }),
      },
      {
        model: CurationSpot,
        as: 'curationSpots',
        attributes: ['spotId', 'order'],
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
          },
        ],
      },
      {
        model: CurationScrap,
        as: 'curationScraps',
        attributes: ['userId'],
        where: { isDeleted: false },
        required: false,
      },
      ...(userId
        ? [
            {
              model: CurationScrap,
              as: 'userCurationScrap',
              attributes: ['userId'],
              where: { userId, isDeleted: false },
              required: false,
            },
          ]
        : []),
    ],
    order: [['curationSpots', 'order', 'ASC']],
    ...(curationName && {
      where: {
        name: {
          [Op.like]: `%${curationName}%`,
        },
      },
    }),
  });

  return curations;
};
