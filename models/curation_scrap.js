module.exports = function (sequelize, DataTypes) {
  const CurationScrap = sequelize.define(
    'CurationScrap',
    {
      curationScrapId: {
        field: 'curation_scrap_id',
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
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
      userId: {
        field: 'user_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'user_id',
        },
      },
      isDeleted: {
        field: 'is_deleted',
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: 'curation_scrap',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );

  CurationScrap.associate = function (models) {
    CurationScrap.belongsTo(models.Curation, {
      foreignKey: 'curation_id',
      as: 'curation',
    });
  };

  return CurationScrap;
};
