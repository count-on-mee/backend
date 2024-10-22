const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trip_document_history', {
    trip_document_log_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    trip_document_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'trip_document',
        key: 'trip_document_id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    history: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trip_document_history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "trip_document_log_id" },
        ]
      },
      {
        name: "user_id_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "trip_document_id_idx",
        using: "BTREE",
        fields: [
          { name: "trip_document_id" },
        ]
      },
    ]
  });
};
