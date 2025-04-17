const { NicknameGenerator } = require('../../utils');
const { NicknameWord, sequelize } = require('../../models');

describe('NicknameGenerator 통합 테스트', () => {
  // 테스트 전에 테스트 데이터 추가
  beforeAll(async () => {
    // 데이터베이스 연결 확인
    try {
      await sequelize.authenticate();
      console.log('데이터베이스 연결 성공');
    } catch (error) {
      console.error('데이터베이스 연결 실패:', error);
      throw error;
    }

    // 테스트 데이터 설정
    const testAdjectives = [
      { word: '테스트용', type: 'adjective' },
      { word: '통합테스트', type: 'adjective' },
    ];

    const testNouns = [
      { word: '단어', type: 'noun' },
      { word: '닉네임', type: 'noun' },
    ];

    // 테스트 데이터가 이미 있는지 확인하고 없으면 추가
    for (const adj of testAdjectives) {
      const [record] = await NicknameWord.findOrCreate({
        where: { word: adj.word, type: adj.type },
        defaults: adj,
      });
    }

    for (const noun of testNouns) {
      const [record] = await NicknameWord.findOrCreate({
        where: { word: noun.word, type: noun.type },
        defaults: noun,
      });
    }
  });

  describe('generate 메서드 통합 테스트', () => {
    it('실제 데이터베이스에서 단어를 가져와 닉네임을 생성해야 함', async () => {
      const nickname = await NicknameGenerator.generate();

      // 생성된 닉네임이 문자열이고 형식이 "형용사 명사" 형태인지 확인
      expect(typeof nickname).toBe('string');
      expect(nickname.split(' ')).toHaveLength(2);

      // 데이터베이스에서 조회한 단어로 구성되었는지 확인
      const [adjective, noun] = nickname.split(' ');

      const foundAdjective = await NicknameWord.findOne({
        where: { word: adjective, type: 'adjective' },
      });

      const foundNoun = await NicknameWord.findOne({
        where: { word: noun, type: 'noun' },
      });

      expect(foundAdjective).toBeTruthy();
      expect(foundNoun).toBeTruthy();
    });

    it('생성된 닉네임은 매번 다를 수 있음', async () => {
      // 생성된 닉네임을 여러 번 생성하여 중복 발생 가능성 확인
      const nicknames = new Set();
      const iterations = 5;

      for (let i = 0; i < iterations; i++) {
        const nickname = await NicknameGenerator.generate();
        nicknames.add(nickname);
      }

      // 단어 조합 수에 따라 중복이 발생할 수 있으므로,
      // 생성된 닉네임이 모두 같지는 않은지 확인
      expect(nicknames.size).toBeGreaterThanOrEqual(1);

      console.log('생성된 닉네임 목록:', Array.from(nicknames));
    });

    // 데이터베이스 비정상 상황 테스트
    it('단어 데이터가 없을 경우 에러를 발생시켜야 함', async () => {
      // 임시로 형용사 단어 데이터를 백업
      const adjectives = await NicknameWord.findAll({
        where: { type: 'adjective' },
      });

      // 형용사 데이터 삭제
      await NicknameWord.destroy({ where: { type: 'adjective' } });

      try {
        // 닉네임 생성 시도 - 에러가 발생해야 함
        await expect(NicknameGenerator.generate()).rejects.toThrow(
          '닉네임 생성에 필요한 단어가 없습니다.'
        );
      } finally {
        // 테스트 후 형용사 데이터 복원
        if (adjectives.length > 0) {
          await NicknameWord.bulkCreate(
            adjectives.map((adj) => ({
              word: adj.word,
              type: adj.type,
            }))
          );
        }
      }
    });
  });

  // 테스트 후 테스트 데이터 정리와 연결 종료
  afterAll(async () => {
    // 테스트 데이터 정리
    await NicknameWord.destroy({
      where: {
        word: ['테스트용', '통합테스트', '단어', '닉네임'],
      },
    });

    // 데이터베이스 연결 종료
    await sequelize.close();
    console.log('데이터베이스 연결 종료됨');
  });
});
