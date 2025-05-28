const userController = require('../../../controllers/userController');
const userService = require('../../../services/userService');

// 서비스와 DTO 모킹
jest.mock('../../../services/userService');
jest.mock('../../../dtos/users/userDto', () => ({
  from: jest.fn().mockImplementation((user) => ({
    userId: user.userId,
    name: user.name,
    nickname: user.nickname,
    email: user.email,
    imgUrl: user.imgUrl,
  })),
  fromMany: jest.fn().mockImplementation((users) =>
    users.map((user) => ({
      userId: user.userId,
      name: user.name,
      nickname: user.nickname,
      email: user.email,
      imgUrl: user.imgUrl,
    }))
  ),
}));

const UserDto = require('../../../dtos/users/userDto');

describe('UserController', () => {
  describe('getUser', () => {
    let mockReq;
    let mockRes;

    beforeEach(() => {
      mockReq = {
        user: {
          userId: 'test-user-id',
        },
      };
      mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest.clearAllMocks();
    });

    it('유저 정보를 성공적으로 조회하면 200 상태코드와 함께 UserDto를 반환한다', async () => {
      // Arrange
      const mockUser = {
        userId: 'test-user-id',
        name: '테스트유저',
        email: 'test@test.com',
        nickname: 'testUser',
        imgUrl: 'http://example.com/img.jpg',
      };
      const mockUserDto = {
        userId: 'test-user-id',
        name: '테스트유저',
        email: 'test@test.com',
        nickname: 'testUser',
        imgUrl: 'http://example.com/img.jpg',
      };

      userService.getUserById.mockResolvedValue(mockUser);
      UserDto.from.mockReturnValue(mockUserDto);

      // Act
      await userController.getUser(mockReq, mockRes);

      // Assert
      expect(userService.getUserById).toHaveBeenCalledWith('test-user-id');
      expect(UserDto.from).toHaveBeenCalledWith(mockUser);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith(mockUserDto);
    });

    it('유저가 존재하지 않으면 404 상태코드와 에러 메시지를 반환한다', async () => {
      // Arrange
      const errorMessage = '사용자를 찾을 수 없습니다.';
      userService.getUserById.mockRejectedValue(new Error(errorMessage));

      // Act
      await userController.getUser(mockReq, mockRes);

      // Assert
      expect(userService.getUserById).toHaveBeenCalledWith('test-user-id');
      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: errorMessage,
      });
    });

    it('예상치 못한 에러가 발생하면 404 상태코드와 기본 에러 메시지를 반환한다', async () => {
      // Arrange
      userService.getUserById.mockRejectedValue(new Error());

      // Act
      await userController.getUser(mockReq, mockRes);

      // Assert
      expect(userService.getUserById).toHaveBeenCalledWith('test-user-id');
      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: '사용자 정보를 조회하는데 실패했습니다.',
      });
    });
  });

  describe('updateUser', () => {
    let mockReq;
    let mockRes;

    beforeEach(() => {
      mockReq = {
        user: {
          userId: 'test-user-id',
        },
        body: {},
        file: null,
      };
      mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest.clearAllMocks();
    });

    it('닉네임 업데이트에 성공하면 200 상태코드와 함께 업데이트된 UserDto를 반환한다', async () => {
      // Arrange
      mockReq.body = { nickname: '새로운닉네임' };

      const mockUpdatedUser = {
        userId: 'test-user-id',
        name: '테스트유저',
        nickname: '새로운닉네임',
        email: 'test@test.com',
        imgUrl: 'http://example.com/img.jpg',
      };

      const mockUserDto = {
        userId: 'test-user-id',
        name: '테스트유저',
        nickname: '새로운닉네임',
        email: 'test@test.com',
        imgUrl: 'http://example.com/img.jpg',
      };

      userService.updateUser.mockResolvedValue(mockUpdatedUser);
      UserDto.from.mockReturnValue(mockUserDto);

      // Act
      await userController.updateUser(mockReq, mockRes);

      // Assert
      expect(userService.updateUser).toHaveBeenCalledWith(
        'test-user-id',
        '새로운닉네임',
        null
      );
      expect(UserDto.from).toHaveBeenCalledWith(mockUpdatedUser);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith(mockUserDto);
    });

    it('프로필 이미지 업데이트에 성공하면 200 상태코드와 함께 업데이트된 UserDto를 반환한다', async () => {
      // Arrange
      mockReq.file = {
        location: 'https://example.com/new-profile.jpg',
      };

      const mockUpdatedUser = {
        userId: 'test-user-id',
        name: '테스트유저',
        nickname: '테스트유저',
        email: 'test@test.com',
        imgUrl: 'https://example.com/new-profile.jpg',
      };

      const mockUserDto = {
        userId: 'test-user-id',
        name: '테스트유저',
        nickname: '테스트유저',
        email: 'test@test.com',
        imgUrl: 'https://example.com/new-profile.jpg',
      };

      userService.updateUser.mockResolvedValue(mockUpdatedUser);
      UserDto.from.mockReturnValue(mockUserDto);

      // Act
      await userController.updateUser(mockReq, mockRes);

      // Assert
      expect(userService.updateUser).toHaveBeenCalledWith(
        'test-user-id',
        undefined,
        {
          location: 'https://example.com/new-profile.jpg',
        }
      );
      expect(UserDto.from).toHaveBeenCalledWith(mockUpdatedUser);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith(mockUserDto);
    });

    it('닉네임과 프로필 이미지 모두 업데이트에 성공하면 200 상태코드와 함께 업데이트된 UserDto를 반환한다', async () => {
      // Arrange
      mockReq.body = { nickname: '새로운닉네임' };
      mockReq.file = {
        location: 'https://example.com/new-profile.jpg',
      };

      const mockUpdatedUser = {
        userId: 'test-user-id',
        name: '테스트유저',
        nickname: '새로운닉네임',
        email: 'test@test.com',
        imgUrl: 'https://example.com/new-profile.jpg',
      };

      const mockUserDto = {
        userId: 'test-user-id',
        name: '테스트유저',
        nickname: '새로운닉네임',
        email: 'test@test.com',
        imgUrl: 'https://example.com/new-profile.jpg',
      };

      userService.updateUser.mockResolvedValue(mockUpdatedUser);
      UserDto.from.mockReturnValue(mockUserDto);

      // Act
      await userController.updateUser(mockReq, mockRes);

      // Assert
      expect(userService.updateUser).toHaveBeenCalledWith(
        'test-user-id',
        '새로운닉네임',
        {
          location: 'https://example.com/new-profile.jpg',
        }
      );
      expect(UserDto.from).toHaveBeenCalledWith(mockUpdatedUser);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith(mockUserDto);
    });

    it('프로필 업데이트 중 에러가 발생하면 400 상태코드와 에러 메시지를 반환한다', async () => {
      // Arrange
      mockReq.body = { nickname: '새로운닉네임' };
      const errorMessage = '프로필 업데이트에 실패했습니다.';
      userService.updateUser.mockRejectedValue(new Error(errorMessage));

      // Act
      await userController.updateUser(mockReq, mockRes);

      // Assert
      expect(userService.updateUser).toHaveBeenCalledWith(
        'test-user-id',
        '새로운닉네임',
        null
      );
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: errorMessage,
      });
    });

    it('예상치 못한 에러가 발생하면 400 상태코드와 기본 에러 메시지를 반환한다', async () => {
      // Arrange
      mockReq.body = { nickname: '새로운닉네임' };
      userService.updateUser.mockRejectedValue(new Error());

      // Act
      await userController.updateUser(mockReq, mockRes);

      // Assert
      expect(userService.updateUser).toHaveBeenCalledWith(
        'test-user-id',
        '새로운닉네임',
        null
      );
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: '프로필 업데이트에 실패했습니다.',
      });
    });
  });
});
