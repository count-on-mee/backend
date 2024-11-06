'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  async up(queryInterface, Sequelize) {
    const filePath = path.join(__dirname, '..', 'spot_data', 'dongdaemun.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

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

    await queryInterface.bulkInsert('Spot', spots, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Spot', null, {});
  },
};
