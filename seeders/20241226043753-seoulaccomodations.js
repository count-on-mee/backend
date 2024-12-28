'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  async up(queryInterface, Sequelize) {
    const filePath = path.join(
      __dirname,
      '..',
      'spot_data',
      'seoulaccomodations.json'
    );
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const categoryData = [
      { id: 3, type: '숙소' },
      { id: 4, type: '관광지' },
      { id: 5, type: '박물관' },
      { id: 6, type: '전시관' },
    ];
    const categories = Object.values(categoryData).map((item) => ({
      spot_category_id: item.id,
      type: item.type,
    }));
    await queryInterface.bulkInsert('spot_category', categories, {});

    const spots = Object.values(data)
      .filter((item) => item.category !== '모텔' && item.category !== '여관')
      .map((item) => {
        const x = Number(item.x);
        const y = Number(item.y);
        const reviewCount = Number(item.visitorReviewCount);
        const reviewScore = Number(item.visitorReviewScore);

        return {
          title: item.name,
          address: item.roadAddress,
          tel: item.phone,
          location: Sequelize.fn(
            'ST_GeomFromText',
            `POINT(${isNaN(y) ? 0 : y} ${isNaN(x) ? 0 : x})`,
            4326
          ),
          naver_spot_id: item.id,
          review_count: isNaN(reviewCount) ? null : reviewCount,
          review_score: isNaN(reviewScore) ? null : reviewScore,
        };
      });

    const uniqueSpots = spots.filter(
      (spot, index, self) =>
        index === self.findIndex((s) => s.naver_spot_id === spot.naver_spot_id)
    );
    await queryInterface.bulkInsert('spot', uniqueSpots, {});

    const spotRecords = await queryInterface.sequelize.query(
      `SELECT spot_id, naver_spot_id FROM spot`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    const spotIdMap = spotRecords.reduce((acc, record) => {
      acc[record.naver_spot_id] = record.spot_id;
      return acc;
    }, {});

    const spotImgs = Object.values(data)
      .filter((item) => item.category !== '모텔' && item.category !== '여관')
      .flatMap((item) => {
        const spotId = spotIdMap[item.id];
        return item.imageUrl
          ? { spot_id: spotId, img_url: item.imageUrl }
          : null;
      })
      .filter((item) => item !== null);

    await queryInterface.bulkInsert('spot_img', spotImgs, {});

    const spotBusinessHours = Object.values(data)
      .filter((item) => item.category !== '모텔' && item.category !== '여관')
      .map((item) => {
        const spotId = spotIdMap[item.id];
        return {
          spot_id: spotId,
          summary: item.businessHours,
        };
      });

    const uniqueSpotBusinessHours = spotBusinessHours.filter(
      (item, index, self) =>
        index === self.findIndex((s) => s.spot_id === item.spot_id)
    );

    await queryInterface.bulkInsert(
      'spot_business_hour_info',
      uniqueSpotBusinessHours,
      {}
    );

    const spotCategoryRelations = Object.values(data)
      .filter((item) => item.category !== '모텔' && item.category !== '여관')
      .map((item) => {
        const spotId = spotIdMap[item.id];
        return {
          spot_id: spotId,
          spot_category_id: 3,
        };
      });

    const uniqueSpotCategoryRelations = spotCategoryRelations.filter(
      (item, index, self) =>
        index === self.findIndex((s) => s.spot_id === item.spot_id)
    );

    await queryInterface.bulkInsert(
      'spot_category_relation',
      uniqueSpotCategoryRelations,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('spot_category_relation', null, {});
    await queryInterface.bulkDelete('spot_business_hour_info', null, {});
    await queryInterface.bulkDelete('spot_img', null, {});
    await queryInterface.bulkDelete('spot', null, {});
    await queryInterface.bulkDelete('spot_category', null, {});
  },
};
