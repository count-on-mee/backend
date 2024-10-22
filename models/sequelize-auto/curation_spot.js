const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('curation_spot', {
    curation_spot_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    curation_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'curation',
        key: 'curation_id'
      }
    },
    spot_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'spot',
        key: 'spot_id'
      }
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'curation_spot',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "curation_spot_id" },
        ]
      },
      {
        name: "curation_id_idx",
        using: "BTREE",
        fields: [
          { name: "curation_id" },
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
