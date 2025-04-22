'use strict';

module.exports = (sequelize, DataTypes) => {
  const Curation = sequelize.define(
    'Curation',
    {
      curationId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'user',
          key: 'user_id',
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      imgUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: 'curation',
      timestamps: true,
      underscored: true,
    }
  );

  Curation.associate = (models) => {
    Curation.belongsTo(models.User, {
      foreignKey: 'userId',
      targetKey: 'userId',
      as: 'user',
    });

    Curation.hasMany(models.CurationSpot, {
      foreignKey: 'curationId',
      sourceKey: 'curationId',
      as: 'curationSpots',
    });
  };

  return Curation;
};
