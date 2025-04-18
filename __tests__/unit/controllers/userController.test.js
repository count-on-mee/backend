const userController = require('../../../controllers/userController');
const userService = require('../../../services/userService');
const { UserDto } = require('../../../dtos');

// 서비스와 DTO 모킹
jest.mock('../../../services/userService');
jest.mock('../../../dtos', () => ({
  UserDto: {
    from: jest.fn(),
  },
}));

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
        id: 'test-user-id',
        email: 'test@test.com',
        nickname: 'testUser',
        profileImgUrl: 'http://example.com/img.jpg',
      };
      const mockUserDto = {
        id: 'test-user-id',
        email: 'test@test.com',
        nickname: 'testUser',
        profileImgUrl: 'http://example.com/img.jpg',
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
});
