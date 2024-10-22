const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trip_document_category', {
    trip_document_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'document_category',
        key: 'trip_document_category_id'
      }
    },
    trip_document_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'trip_document',
        key: 'trip_document_id'
      }
    }
  }, {
    sequelize,
    tableName: 'trip_document_category',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "trip_document_category_id" },
        ]
      },
      {
        name: "document_id_idx",
        using: "BTREE",
        fields: [
          { name: "trip_document_id" },
        ]
      },
      {
        name: "category_id_idx",
        using: "BTREE",
        fields: [
          { name: "trip_document_category_id" },
        ]
      },
    ]
  });
};
