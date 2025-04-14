'use strict';

module.exports = (sequelize, DataTypes) => {
  const NicknameWord = sequelize.define(
    'NicknameWord',
    {
      nicknameWordId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      word: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM('adjective', 'noun'),
        allowNull: false,
      },
    },
    {
      tableName: 'nickname_word',
      timestamps: true,
      underscored: true,
      indexes: [
        {
          fields: ['type'],
          name: 'idx_nickname_word_type',
        },
      ],
    }
  );

  return NicknameWord;
};
