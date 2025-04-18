const { User } = require('../../../models');
const userService = require('../../../services/userService');

// User 모델 모킹
jest.mock('../../../models', () => ({
  User: {
    findByPk: jest.fn(),
  },
}));

describe('UserService', () => {
  describe('getUserById', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('존재하는 유저 ID로 조회하면 해당 유저를 반환한다', async () => {
      // Arrange
      const mockUserId = 'test-user-id';
      const mockUser = {
        id: mockUserId,
        email: 'test@test.com',
        nickname: 'testUser',
      };
      User.findByPk.mockResolvedValue(mockUser);

      // Act
      const result = await userService.getUserById(mockUserId);

      // Assert
      expect(User.findByPk).toHaveBeenCalledWith(mockUserId);
      expect(result).toEqual(mockUser);
    });

    it('존재하지 않는 유저 ID로 조회하면 에러를 던진다', async () => {
      // Arrange
      const mockUserId = 'non-existing-id';
      User.findByPk.mockResolvedValue(null);

      // Act & Assert
      await expect(userService.getUserById(mockUserId)).rejects.toThrow(
        '사용자를 찾을 수 없습니다.'
      );
      expect(User.findByPk).toHaveBeenCalledWith(mockUserId);
    });

    it('DB 조회 중 에러가 발생하면 에러를 전파한다', async () => {
      // Arrange
      const mockUserId = 'test-user-id';
      const mockError = new Error('Database error');
      User.findByPk.mockRejectedValue(mockError);

      // Act & Assert
      await expect(userService.getUserById(mockUserId)).rejects.toThrow(
        'Database error'
      );
      expect(User.findByPk).toHaveBeenCalledWith(mockUserId);
    });
  });
});
