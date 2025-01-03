module.exports = function (sequelize, DataTypes) {
  const Inquiry = sequelize.define(
    'Inquiry',
    {
      inquiryId: {
        field: 'inquiry_id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        field: 'user_id',
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'user_id',
        },
        allowNull: false,
      },
      inquiryCategoryId: {
        field: 'inquiry_category_id',
        type: DataTypes.INTEGER,
        references: {
          model: 'inquiry_category',
          key: 'inquiry_category_id',
        },
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      reply: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM('pending', 'resolved'),
        defaultValue: 'pending',
        allowNull: false,
      },
    },
    {
      tableName: 'inquiry',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );

  Inquiry.associate = function (models) {
    Inquiry.belongsTo(models.User, {
      foreignKey: 'user_id',
    });
    Inquiry.belongsTo(models.InquiryCategory, {
      as: 'inquiryCategory',
      foreignKey: 'inquiry_category_id',
    });
  };

  return Inquiry;
};
