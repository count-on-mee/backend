const request = require('supertest');
const express = require('express');
const userRouter = require('../../routers/userRouter');
const userService = require('../../services/userService');
const { UserDto } = require('../../dtos');
const { requireAuth } = require('../../middlewares/authMiddleware');

// 미들웨어, 서비스, DTO 모킹
jest.mock('../../middlewares/authMiddleware', () => ({
  requireAuth: jest.fn((req, res, next) => next()),
}));
jest.mock('../../services/userService');
jest.mock('../../dtos', () => ({
  UserDto: {
    from: jest.fn(),
  },
}));

// 테스트용 Express 앱 생성
const app = express();
app.use(express.json());
app.use('/users', userRouter);

describe('User Router Integration Test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /users/me', () => {
    it('인증된 사용자의 정보를 성공적으로 반환한다', async () => {
      // Arrange
      const mockUserId = 'test-user-id';
      const mockUser = {
        id: mockUserId,
        email: 'test@test.com',
        nickname: 'testUser',
        profileImgUrl: 'http://example.com/img.jpg',
      };
      const mockUserDto = {
        id: mockUserId,
        email: 'test@test.com',
        nickname: 'testUser',
        profileImgUrl: 'http://example.com/img.jpg',
      };

      // requireAuth 미들웨어가 user 정보를 req 객체에 추가하도록 모킹
      requireAuth.mockImplementation((req, res, next) => {
        req.user = { userId: mockUserId };
        next();
      });

      userService.getUserById.mockResolvedValue(mockUser);
      UserDto.from.mockReturnValue(mockUserDto);

      // Act & Assert
      const response = await request(app)
        .get('/users/me')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(requireAuth).toHaveBeenCalled();
      expect(userService.getUserById).toHaveBeenCalledWith(mockUserId);
      expect(UserDto.from).toHaveBeenCalledWith(mockUser);
      expect(response.body).toEqual(mockUserDto);
    });

    it('사용자가 존재하지 않으면 404 에러를 반환한다', async () => {
      // Arrange
      const mockUserId = 'non-existing-id';
      const errorMessage = '사용자를 찾을 수 없습니다.';

      requireAuth.mockImplementation((req, res, next) => {
        req.user = { userId: mockUserId };
        next();
      });

      userService.getUserById.mockRejectedValue(new Error(errorMessage));

      // Act & Assert
      const response = await request(app)
        .get('/users/me')
        .expect('Content-Type', /json/)
        .expect(404);

      expect(requireAuth).toHaveBeenCalled();
      expect(userService.getUserById).toHaveBeenCalledWith(mockUserId);
      expect(response.body).toEqual({
        message: errorMessage,
      });
    });

    it('인증되지 않은 사용자는 접근할 수 없다', async () => {
      // Arrange
      const mockError = new Error('Unauthorized');
      requireAuth.mockImplementation((req, res, next) => {
        res.status(401).json({ message: 'Unauthorized' });
      });

      // Act & Assert
      const response = await request(app)
        .get('/users/me')
        .expect('Content-Type', /json/)
        .expect(401);

      expect(requireAuth).toHaveBeenCalled();
      expect(userService.getUserById).not.toHaveBeenCalled();
      expect(response.body).toEqual({
        message: 'Unauthorized',
      });
    });
  });
});
