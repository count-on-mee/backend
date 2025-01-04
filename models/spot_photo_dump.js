module.exports = function(sequelize, DataTypes) {
  const SpotPhotoDump = sequelize.define('SpotPhotoDump', 
    {
      spotPhotoDumpId: {
        field: 'spot_photo_dump_id',
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
          key: 'spot_id'
        }
      },
      userId: {
        field: 'user_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'user_id'
        }
      },
      content: {
        type: DataTypes.STRING(2048),
        allowNull: true
      },
    },
      {
        tableName: 'spot_photo_dump',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      }
    );
    
    SpotPhotoDump.associate = function (models) {
      SpotPhotoDump.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
      });
      SpotPhotoDump.belongsTo(models.Spot, {
        foreignKey: 'spot_id',
        as: 'spot',
      });
      SpotPhotoDump.hasMany(models.SpotPhotoDumpImg, {
        foreignKey: 'spot_photo_dump_id',
      });
    };
    return SpotPhotoDump; 
};
  