'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const adjectives = [
      '행복한',
      '즐거운',
      '신나는',
      '멋진',
      '귀여운',
      '씩씩한',
      '활기찬',
      '용감한',
      '친절한',
      '똑똑한',
      '지혜로운',
      '유쾌한',
      '상냥한',
      '재미있는',
      '밝은',
      '따뜻한',
      '포근한',
      '사랑스러운',
      '든든한',
      '깜찍한',
    ].map((word) => ({
      word,
      type: 'adjective',
      created_at: new Date(),
      updated_at: new Date(),
    }));

    const nouns = [
      '호랑이',
      '토끼',
      '사자',
      '강아지',
      '고양이',
      '팬더',
      '거북이',
      '코끼리',
      '기린',
      '펭귄',
      '돌고래',
      '캥거루',
      '코알라',
      '판다',
      '햄스터',
      '여우',
      '다람쥐',
      '나비',
      '참새',
      '물개',
    ].map((word) => ({
      word,
      type: 'noun',
      created_at: new Date(),
      updated_at: new Date(),
    }));

    await queryInterface.bulkInsert('nickname_word', [...adjectives, ...nouns]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('nickname_word', null, {});
  },
};
