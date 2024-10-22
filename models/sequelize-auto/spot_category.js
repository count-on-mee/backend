const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spot_category', {
    spot_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    spot_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'spot',
        key: 'spot_id'
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'category',
        key: 'category_id'
      }
    }
  }, {
    sequelize,
    tableName: 'spot_category',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "spot_category_id" },
        ]
      },
      {
        name: "category_id_idx",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
      {
        name: "spot_id_idx",
        using: "BTREE",
        fields: [
          { name: "spot_id" },
        ]
      },
    ]
  });
};
