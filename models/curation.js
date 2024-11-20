module.exports = function (sequelize, DataTypes) {
  const Curation = sequelize.define(
    'Curation',
    {
      curationId: {
        field: 'curation_id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
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
      title: {
        type: DataTypes.STRING(90),
        allowNull: false,
      },
    },
    {
      tableName: 'curation',
      timestamps: false,
    }
  );

  Curation.associate = function (models) {
    Curation.hasMany(models.CurationSpot, {
      foreignKey: 'curation_id',
    });
    Curation.belongsTo(models.User, {
      foreignKey: 'user_id',
    });
  };

  return Curation;
};
