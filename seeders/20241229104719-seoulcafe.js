'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  async up(queryInterface, Sequelize) {
    const filePath = path.join(__dirname, '..', 'spot_data', 'seoulcafe.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const spots = Object.values(data)
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

    //DB에 존재하는 데이터들과 비교해서, 존재하지 않는 데이터만 넣어줘야돼

    console.log('uniqueSpot', uniqueSpots);
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
      .flatMap((item) => {
        const spotId = spotIdMap[item.id];
        return item.imageUrls
          .filter((imgUrl) => imgUrl !== null)
          .map((imgUrl) => ({
            spot_id: spotId,
            img_url: imgUrl,
          }));
      });

    await queryInterface.bulkInsert('spot_img', spotImgs, {});

    const spotBusinessHours = Object.values(data)
      .map((item) => {
        const spotId = spotIdMap[item.id];
        return {
          spot_id: spotId,
          summary: item.businessHours,
        };
      });

    await queryInterface.bulkInsert(
      'spot_business_hour_info',
      spotBusinessHours,
      {}
    );

    const spotCategoryRelations = Object.values(data)
      .map((item) => {
        const spotId = spotIdMap[item.id];
        return {
          spot_id: spotId,
          spot_category_id: 2,
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
    await queryInterface.bulkDelete('spot_business_hour_info', null, {});
    await queryInterface.bulkDelete('spot_img', null, {});
    await queryInterface.bulkDelete('spot', null, {});
    await queryInterface.bulkDelete('spot_category', null, {});
  },
};
