'use strict';

module.exports = (sequelize, DataTypes) => {
  const Inquiry = sequelize.define(
    'Inquiry',
    {
      inquiryId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      inquiryCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'inquiry_category',
          key: 'inquiry_category_id',
        },
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'user',
          key: 'user_id',
        },
      },
      title: {
        type: DataTypes.STRING,
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
      underscored: true,
    }
  );

  Inquiry.associate = (models) => {
    Inquiry.belongsTo(models.User, {
      foreignKey: 'userId',
      targetKey: 'userId',
      as: 'user',
    });
  };

  return Inquiry;
};
