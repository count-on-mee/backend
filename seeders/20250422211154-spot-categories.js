'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // 먼저 부모 카테고리 추가
    await queryInterface.bulkInsert(
      'spot_category',
      [
        {
          type: '식당',
          parent_spot_category_id: null,
        },
        {
          type: '카페',
          parent_spot_category_id: null,
        },
        {
          type: '숙소',
          parent_spot_category_id: null,
        },
        {
          type: '관광지',
          parent_spot_category_id: null,
        },
        {
          type: '복합 문화 공간',
          parent_spot_category_id: null,
        },
      ],
      {}
    );

    // 복합 문화 공간의 ID 가져오기 (나중에 하위 카테고리 생성을 위해)
    const categories = await queryInterface.sequelize.query(
      `SELECT spot_category_id FROM spot_category WHERE type = '복합 문화 공간'`,
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    const complexCultureSpaceId = categories[0].spot_category_id;

    // 복합 문화 공간의 하위 카테고리 추가
    await queryInterface.bulkInsert(
      'spot_category',
      [
        {
          type: '박물관',
          parent_spot_category_id: complexCultureSpaceId,
        },
        {
          type: '미술관',
          parent_spot_category_id: complexCultureSpaceId,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('spot_category', null, {});
  },
};
