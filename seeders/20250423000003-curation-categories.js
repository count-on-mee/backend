'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'curation_category',
      [
        {
          type: '여행',
        },
        {
          type: '식당',
        },
        {
          type: '카페',
        },
        {
          type: '자연',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('curation_category', null, {});
  },
};
