'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  async up(queryInterface, Sequelize) {
    const filePath = path.join(__dirname, '..', 'spot_data', 'dongdaemun.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const categoryData = [
      { id: 1, type: '식당' },
      { id: 2, type: '카페' },
    ];
    const categories = Object.values(categoryData).map((item) => ({
      spot_category_id: item.id,
      type: item.type,
    }));
    await queryInterface.bulkInsert('spot_category', categories, {});

    const spots = Object.values(data)
      .filter((item) => item.__typename === 'RestaurantListSummary')
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

    await queryInterface.bulkInsert('spot', spots, {});

    const spotRecords = await queryInterface.sequelize.query(
      `SELECT spot_id, naver_spot_id FROM spot`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    const spotIdMap = spotRecords.reduce((acc, record) => {
      acc[record.naver_spot_id] = record.spot_id;
      return acc;
    }, {});

    const spotImgs = Object.values(data)
      .filter((item) => item.__typename === 'RestaurantListSummary')
      .flatMap((item) => {
        const spotId = spotIdMap[item.id];
        return item.imageUrls.map((imgUrl) => ({
          spot_id: spotId,
          img_url: imgUrl,
        }));
      });
    await queryInterface.bulkInsert('spot_img', spotImgs, {});

    const spotBusinessHours = Object.values(data)
      .filter((item) => item.__typename === 'RestaurantListSummary')
      .map((item) => {
        const spotId = spotIdMap[item.id];
        return {
          spot_id: spotId,
          summary: item.businessHours,
          week: null,
          open_time: null,
          close_time: null,
          break_start_time: null,
          break_end_time: null,
        };
      });

    await queryInterface.bulkInsert(
      'spot_business_hour',
      spotBusinessHours,
      {}
    );

    const spotCategoryRelations = Object.values(data)
      .filter((item) => item.__typename === 'RestaurantListSummary')
      .map((item) => {
        const spotId = spotIdMap[item.id];
        return {
          spot_id: spotId,
          spot_category_id: 1,
        };
      });

    await queryInterface.bulkInsert(
      'spot_category_relation',
      spotCategoryRelations,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('spot_category_relation', null, {});
    await queryInterface.bulkDelete('spot_business_hour', null, {});
    await queryInterface.bulkDelete('spot_img', null, {});
    await queryInterface.bulkDelete('spot', null, {});
    await queryInterface.bulkDelete('spot_category', null, {});
  },
};
