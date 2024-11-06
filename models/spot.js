module.exports = function (sequelize, DataTypes) {
  const Spot = sequelize.define(
    'Spot',
    {
      spotId: {
        field: 'spot_id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      tel: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      location: {
        type: DataTypes.GEOMETRY('POINT', 4326),
        allowNull: false,
      },
      naverSpotId: {
        field: 'naver_spot_id',
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      reviewCount: {
        field: 'review_count',
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      reviewScore: {
        field: 'review_score',
        type: DataTypes.DECIMAL(5, 3),
        allowNull: true,
      },
    },
    {
      tableName: 'spot',
      timestamps: false,
      indexes: [
        {
          fields: ['location'],
          type: 'SPATIAL',
          name: 'spot_location_idx',
        },
      ],
      hooks: {
        beforeCreate: async (spot, options) => {
          if (spot.location && spot.location.coordinates) {
            const query = `
              INSERT INTO spot (title, address, tel, review_count, review_score, naver_spot_id, location)
              VALUES (:title, :address, :tel, :reviewCount, :reviewScore, :naverSpotId, ST_PointFromText(:location, 4326))
            `;

            const values = {
              title: spot.title,
              address: spot.address,
              tel: spot.tel,
              reviewCount: spot.reviewCount,
              reviewScore: spot.reviewScore,
              naverSpotId: spot.naverSpotId,
              location: `POINT(${spot.location.coordinates[0]} ${spot.location.coordinates[1]})`,
            };

            await sequelize.query(query, {
              replacements: values,
              type: sequelize.QueryTypes.INSERT,
            });

            spot.isNewRecord = false;
          }
        },
      },
    }
  );
  Spot.createWithRawQuery = async function (data) {
    const query = `
      INSERT INTO spot (title, address, tel, review_count, review_score, naver_spot_id, location)
      VALUES (:title, :address, :tel, :reviewCount, :reviewScore, :naverSpotId, ST_PointFromText(:location, 4326))
    `;

    const values = {
      title: data.title,
      address: data.address,
      tel: data.tel,
      reviewCount: data.reviewCount,
      reviewScore: data.reviewScore,
      naverSpotId: data.naverSpotId,
      location: `POINT(${data.location.coordinates[0]} ${data.location.coordinates[1]})`,
    };

    await sequelize.query(query, {
      replacements: values,
      type: sequelize.QueryTypes.INSERT,
    });
  };

  Spot.associate = function (models) {
    Spot.hasMany(models.SpotCategoryRelation, {
      foreignKey: 'spot_id',
    });
  };

  return Spot;
};
