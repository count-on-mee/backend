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

  describe('updateUser', () => {
    // 테스트용 mock 설정
    let mockUser;
    const mockUserId = 'test-user-id';

    beforeEach(() => {
      mockUser = {
        userId: mockUserId,
        nickname: '기존닉네임',
        imgUrl: 'https://example.com/old-profile.jpg',
        update: jest.fn().mockResolvedValue(true),
      };

      User.findByPk.mockResolvedValue(mockUser);
      jest.clearAllMocks();
    });

    it('닉네임 업데이트에 성공한다', async () => {
      // Arrange
      const nickname = '새로운닉네임';
      mockUser.update.mockImplementation(function (data) {
        this.nickname = data.nickname;
        return this;
      });

      // Act
      const result = await userService.updateUser(mockUserId, nickname, null);

      // Assert
      expect(User.findByPk).toHaveBeenCalledWith(mockUserId);
      expect(mockUser.update).toHaveBeenCalledWith({ nickname });
      expect(result).toEqual(mockUser);
    });

    it('프로필 이미지 업데이트에 성공한다', async () => {
      // Arrange
      const imgUrl = { location: 'https://example.com/new-profile.jpg' };
      mockUser.update.mockImplementation(function (data) {
        this.imgUrl = data.imgUrl;
        return this;
      });

      // Act
      const result = await userService.updateUser(mockUserId, null, imgUrl);

      // Assert
      expect(User.findByPk).toHaveBeenCalledWith(mockUserId);
      expect(mockUser.update).toHaveBeenCalledWith({ imgUrl: imgUrl.location });
      expect(result).toEqual(mockUser);
    });

    it('닉네임과 프로필 이미지 모두 업데이트에 성공한다', async () => {
      // Arrange
      const nickname = '새로운닉네임';
      const imgUrl = { location: 'https://example.com/new-profile.jpg' };
      mockUser.update.mockImplementation(function (data) {
        this.nickname = data.nickname;
        this.imgUrl = data.imgUrl;
        return this;
      });

      // Act
      const result = await userService.updateUser(mockUserId, nickname, imgUrl);

      // Assert
      expect(User.findByPk).toHaveBeenCalledWith(mockUserId);
      expect(mockUser.update).toHaveBeenCalledWith({
        nickname,
        imgUrl: imgUrl.location,
      });
      expect(result).toEqual(mockUser);
    });

    it('존재하지 않는 유저 프로필 업데이트 시 에러를 던진다', async () => {
      // Arrange
      User.findByPk.mockResolvedValue(null);
      const nickname = '새로운닉네임';

      // Act & Assert
      await expect(
        userService.updateUser(mockUserId, nickname, null)
      ).rejects.toThrow('사용자를 찾을 수 없습니다.');
      expect(User.findByPk).toHaveBeenCalledWith(mockUserId);
      expect(mockUser.update).not.toHaveBeenCalled();
    });

    it('DB 업데이트 중 에러가 발생하면 에러를 전파한다', async () => {
      // Arrange
      const mockError = new Error('Database error');
      mockUser.update.mockRejectedValue(mockError);
      const nickname = '새로운닉네임';

      // Act & Assert
      await expect(
        userService.updateUser(mockUserId, nickname, null)
      ).rejects.toThrow('Database error');
      expect(User.findByPk).toHaveBeenCalledWith(mockUserId);
      expect(mockUser.update).toHaveBeenCalledWith({ nickname });
    });
  });
});
