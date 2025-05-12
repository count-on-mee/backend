const {
  sequelize,
  SpotImg,
  Curation,
  CurationCategory,
  CurationCategoryRelation,
  CurationSpot,
} = require('../models');

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
