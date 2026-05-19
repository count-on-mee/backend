'use strict';

const VERSION_TABLE = 'trip_document_version';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(VERSION_TABLE, 'name', {
      type: Sequelize.STRING(50),
      allowNull: true,
    });

    // 기존 데이터 backfill: "V{version_number}"
    await queryInterface.sequelize.query(`
      UPDATE \`${VERSION_TABLE}\`
      SET \`name\` = CONCAT('V', \`version_number\`)
      WHERE \`name\` IS NULL
    `);

    await queryInterface.changeColumn(VERSION_TABLE, 'name', {
      type: Sequelize.STRING(50),
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(VERSION_TABLE, 'name');
  },
};

