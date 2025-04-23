'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('faq_category', [
      {
        type: '계정',
      },
      {
        type: '앱 이용',
      },
      {
        type: '스팟',
      },
      {
        type: '큐레이션',
      },
      {
        type: '기타',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('faq_category', null, {});
  },
};
