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
  User,
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
  const availableImgs = spotImgs.map((spotImage) => spotImage.imgUrl);

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
        model: User,
        as: 'user',
        attributes: ['userId', 'nickname', 'imgUrl'],
      },
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
                attributes: ['imgUrl'],
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

exports.getMyCurations = async (userId) => {
  const curations = await Curation.findAll({
    attributes: ['curationId', 'name', 'description', 'imgUrl'],
    where: { userId },
    include: [
      {
        model: User,
        as: 'user',
        attributes: ['userId', 'nickname', 'imgUrl'],
      },
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
                attributes: ['imgUrl'],
              },
              {
                model: SpotScrap,
                as: 'spotScraps',
                attributes: ['userId'],
                where: { isDeleted: false },
                required: false,
              },
              {
                model: SpotScrap,
                as: 'userSpotScrap',
                attributes: ['userId'],
                where: { userId, isDeleted: false },
                required: false,
              },
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
      {
        model: CurationScrap,
        as: 'userCurationScrap',
        attributes: ['userId'],
        where: { userId, isDeleted: false },
        required: false,
      },
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
        model: User,
        as: 'user',
        attributes: ['userId', 'nickname', 'imgUrl'],
      },
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
                attributes: ['imgUrl'],
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
        model: User,
        as: 'user',
        attributes: ['userId', 'nickname', 'imgUrl'],
      },
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
                attributes: ['imgUrl'],
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

exports.updateCuration = async (
  userId,
  curationId,
  name,
  description,
  categories,
  spots
) => {
  const curation = await Curation.findOne({ where: { curationId, userId } });
  if (!curation) {
    throw new Error('큐레이션을 찾을 수 없거나 수정 권한이 없습니다.');
  }

  const shouldUpdateBase = name || description;
  const shouldUpdateCategories =
    Array.isArray(categories) && categories.length > 0;
  const shouldUpdateSpots = Array.isArray(spots) && spots.length > 0;

  const transaction = await sequelize.transaction();
  try {
    if (shouldUpdateBase || shouldUpdateSpots) {
      const updateData = {};
      if (name) updateData.name = name;
      if (description) updateData.description = description;
      if (shouldUpdateSpots) {
        const newImgUrl = await getRandomSpotImg(spots);
        if (newImgUrl) updateData.imgUrl = newImgUrl;
      }
      if (Object.keys(updateData).length > 0) {
        await curation.update(updateData, { transaction });
      }
    }

    if (shouldUpdateCategories) {
      await CurationCategoryRelation.destroy({
        where: { curationId },
        transaction,
      });
      const curationCategoryIds = await getCurationCategoryIds(categories);
      if (curationCategoryIds.length > 0) {
        const curationCategories = curationCategoryIds.map(
          (curationCategoryId) => ({
            curationId: curation.curationId,
            curationCategoryId,
          })
        );
        await CurationCategoryRelation.bulkCreate(curationCategories, {
          transaction,
        });
      }
    }

    if (shouldUpdateSpots) {
      await CurationSpot.destroy({ where: { curationId }, transaction });
      const curationSpots = spots.map((spot) => ({
        curationId: curation.curationId,
        spotId: spot.spotId,
        order: spot.order,
      }));
      await CurationSpot.bulkCreate(curationSpots, { transaction });
    }

    await transaction.commit();
    return await exports.getCurationById(userId, curationId);
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

exports.deleteCuration = async (userId, curationId) => {
  const transaction = await sequelize.transaction();

  try {
    const curation = await Curation.findOne({
      where: { curationId, userId },
    });

    if (!curation) {
      throw new Error('큐레이션을 찾을 수 없거나 삭제 권한이 없습니다.');
    }

    await CurationCategoryRelation.destroy({
      where: { curationId },
      transaction,
    });

    await CurationSpot.destroy({
      where: { curationId },
      transaction,
    });

    await curation.destroy({ transaction });

    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};
