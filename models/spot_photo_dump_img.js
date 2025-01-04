module.exports = function(sequelize, DataTypes) {
  const SpotPhotoDumpImg = sequelize.define('SpotPhotoDumpImg', {
    spotPhotoDumpImgId: {
      field: 'spot_photo_dump_img_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    spotPhotoDumpId: {
      field: 'spot_photo_dump_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'spot_photo_dump',
        key: 'spot_photo_dump_id',
      },
    },
    imgUrl: {
      field: 'img_url',
      type: DataTypes.TEXT,
      allowNull: true
    }
  },
    {
      tableName: 'spot_photo_dump_img',
      timestamps: false,
    }
  );
   
  SpotPhotoDumpImg.associate = function(models) {
    SpotPhotoDumpImg.belongsTo(models.SpotPhotoDump, {
      foreignKey: 'spot_photo_dump_id',
    })
  };
  return SpotPhotoDumpImg; 
};