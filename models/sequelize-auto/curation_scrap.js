const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('curation_scrap', {
    curation_scrap_id: {
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'curation_scrap',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "curation_scrap_id" },
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
        name: "user_id_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
