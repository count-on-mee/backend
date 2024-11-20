module.exports = function (sequelize, DataTypes) {
  const CurationSpot = sequelize.define(
    'CurationSpot',
    {
      curationSpotId: {
        field: 'curation_spot_id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      curationId: {
        field: 'curation_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'curation',
          key: 'curation_id',
        },
      },
      spotId: {
        field: 'spot_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'spot',
          key: 'spot_id',
        },
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: 'curation_spot',
      timestamps: false,
    }
  );

  CurationSpot.associate = function (models) {
    CurationSpot.belongsTo(models.Curation, {
      foreignKey: 'curation_id',
    });
    CurationSpot.belongsTo(models.Spot, {
      foreignKey: 'spot_id',
    });
  };

  return CurationSpot;
};
