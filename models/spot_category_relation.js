const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const SpotCategoryRelation = sequelize.define(
    'spot_category_relation',
    {
      spot_category_relation_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      spot_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'spot',
          key: 'spot_id',
        },
      },
      spot_category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'spot_category',
          key: 'spot_category_id',
        },
      },
    },
    {
      sequelize,
      tableName: 'spot_category_relation',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'spot_category_relation_id' }],
        },
        {
          name: 'spot_category_relation_spot_id_idx',
          using: 'BTREE',
          fields: [{ name: 'spot_id' }],
        },
        {
          name: 'spot_category_relation_spot_category_id_idx',
          using: 'BTREE',
          fields: [{ name: 'spot_category_id' }],
        },
      ],
    }
  );
  return SpotCategoryRelation;
};
