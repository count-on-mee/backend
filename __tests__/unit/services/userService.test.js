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
        profileImgUrl: 'https://example.com/old-profile.jpg',
        update: jest.fn().mockResolvedValue(true),
      };

      User.findByPk.mockResolvedValue(mockUser);
      jest.clearAllMocks();
    });

    it('닉네임 업데이트에 성공한다', async () => {
      // Arrange
      const updateData = { nickname: '새로운닉네임' };
      mockUser.update.mockImplementation(function (data) {
        this.nickname = data.nickname;
        return this;
      });

      // Act
      const result = await userService.updateUser(mockUserId, updateData);

      // Assert
      expect(User.findByPk).toHaveBeenCalledWith(mockUserId);
      expect(mockUser.update).toHaveBeenCalledWith({
        nickname: '새로운닉네임',
      });
      expect(result).toEqual(mockUser);
    });

    it('프로필 이미지 업데이트에 성공한다', async () => {
      // Arrange
      const updateData = {
        profileImgUrl: { location: 'https://example.com/new-profile.jpg' },
      };
      mockUser.update.mockImplementation(function (data) {
        this.profileImgUrl = data.profileImgUrl;
        return this;
      });

      // Act
      const result = await userService.updateUser(mockUserId, updateData);

      // Assert
      expect(User.findByPk).toHaveBeenCalledWith(mockUserId);
      expect(mockUser.update).toHaveBeenCalledWith({
        profileImgUrl: 'https://example.com/new-profile.jpg',
      });
      expect(result).toEqual(mockUser);
    });

    it('닉네임과 프로필 이미지 모두 업데이트에 성공한다', async () => {
      // Arrange
      const updateData = {
        nickname: '새로운닉네임',
        profileImgUrl: { location: 'https://example.com/new-profile.jpg' },
      };
      mockUser.update.mockImplementation(function (data) {
        this.nickname = data.nickname;
        this.profileImgUrl = data.profileImgUrl;
        return this;
      });

      // Act
      const result = await userService.updateUser(mockUserId, updateData);

      // Assert
      expect(User.findByPk).toHaveBeenCalledWith(mockUserId);
      expect(mockUser.update).toHaveBeenCalledWith({
        nickname: '새로운닉네임',
        profileImgUrl: 'https://example.com/new-profile.jpg',
      });
      expect(result).toEqual(mockUser);
    });

    it('존재하지 않는 유저 프로필 업데이트 시 에러를 던진다', async () => {
      // Arrange
      User.findByPk.mockResolvedValue(null);
      const updateData = { nickname: '새로운닉네임' };

      // Act & Assert
      await expect(
        userService.updateUser(mockUserId, updateData)
      ).rejects.toThrow('사용자를 찾을 수 없습니다.');
      expect(User.findByPk).toHaveBeenCalledWith(mockUserId);
      expect(mockUser.update).not.toHaveBeenCalled();
    });

    it('DB 업데이트 중 에러가 발생하면 에러를 전파한다', async () => {
      // Arrange
      const mockError = new Error('Database error');
      mockUser.update.mockRejectedValue(mockError);
      const updateData = { nickname: '새로운닉네임' };

      // Act & Assert
      await expect(
        userService.updateUser(mockUserId, updateData)
      ).rejects.toThrow('Database error');
      expect(User.findByPk).toHaveBeenCalledWith(mockUserId);
      expect(mockUser.update).toHaveBeenCalledWith({
        nickname: '새로운닉네임',
      });
    });
  });
});
