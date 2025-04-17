const { NicknameWord } = require('../models');

class NicknameGenerator {
  static async generate() {
    try {
      const [adjectives, nouns] = await Promise.all([
        NicknameWord.findAll({
          where: { type: 'adjective' },
          attributes: ['word'],
          raw: true,
        }),
        NicknameWord.findAll({
          where: { type: 'noun' },
          attributes: ['word'],
          raw: true,
        }),
      ]);

      if (!adjectives.length || !nouns.length) {
        throw new Error('닉네임 생성에 필요한 단어가 없습니다.');
      }

      const adjective =
        adjectives[Math.floor(Math.random() * adjectives.length)].word;
      const noun = nouns[Math.floor(Math.random() * nouns.length)].word;

      return `${adjective} ${noun}`;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = NicknameGenerator;
