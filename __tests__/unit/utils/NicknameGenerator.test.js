const { NicknameGenerator } = require('../../../utils');
const { NicknameWord } = require('../../../models');

// NicknameWord 모델 mock
jest.mock('../../../models', () => ({
  NicknameWord: {
    findAll: jest.fn(),
  },
}));

describe('NicknameGenerator 클래스 테스트', () => {
  // 테스트용 mock 데이터
  const mockAdjectives = [
    { word: '행복한' },
    { word: '즐거운' },
    { word: '신나는' },
  ];
  const mockNouns = [{ word: '호랑이' }, { word: '토끼' }, { word: '사자' }];

  beforeEach(() => {
    // Math.random 목킹
    jest.spyOn(Math, 'random').mockReturnValue(0);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('generate 메서드 테스트', () => {
    it('형용사와 명사를 조합하여 닉네임을 생성해야 함', async () => {
      // Given
      NicknameWord.findAll
        .mockResolvedValueOnce(mockAdjectives)
        .mockResolvedValueOnce(mockNouns);

      // When
      const nickname = await NicknameGenerator.generate();

      // Then
      expect(nickname).toBe('행복한 호랑이');
      expect(NicknameWord.findAll).toHaveBeenCalledTimes(2);
      expect(NicknameWord.findAll).toHaveBeenNthCalledWith(1, {
        where: { type: 'adjective' },
        attributes: ['word'],
        raw: true,
      });
      expect(NicknameWord.findAll).toHaveBeenNthCalledWith(2, {
        where: { type: 'noun' },
        attributes: ['word'],
        raw: true,
      });
    });

    it('데이터베이스에 형용사가 없을 경우 에러를 발생시켜야 함', async () => {
      // Given
      NicknameWord.findAll
        .mockResolvedValueOnce([])
        .mockResolvedValueOnce(mockNouns);

      // When & Then
      await expect(NicknameGenerator.generate()).rejects.toThrow(
        '닉네임 생성에 필요한 단어가 없습니다.'
      );
    });

    it('데이터베이스에 명사가 없을 경우 에러를 발생시켜야 함', async () => {
      // Given
      NicknameWord.findAll
        .mockResolvedValueOnce(mockAdjectives)
        .mockResolvedValueOnce([]);

      // When & Then
      await expect(NicknameGenerator.generate()).rejects.toThrow(
        '닉네임 생성에 필요한 단어가 없습니다.'
      );
    });

    it('데이터베이스 조회 중 오류 발생 시 에러를 전파해야 함', async () => {
      // Given
      const testError = new Error('데이터베이스 연결 오류');
      NicknameWord.findAll.mockRejectedValue(testError);

      // When & Then
      await expect(NicknameGenerator.generate()).rejects.toThrow(testError);
    });
  });
});
