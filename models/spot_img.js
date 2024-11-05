module.exports = function (sequelize, DataTypes) {
  const SpotImg = sequelize.define(
    'SpotImg',
    {
      spotImgId: {
        field: 'spot_img_id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
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
      imgUrl: {
        field: 'img_url',
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'spot_img',
      timestamps: false,
    }
  );
  return SpotImg;
};
