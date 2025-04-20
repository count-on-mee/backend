const request = require('supertest');
const express = require('express');
const userRouter = require('../../routers/userRouter');
const userService = require('../../services/userService');
const { UserDto } = require('../../dtos');
const { requireAuth } = require('../../middlewares/authMiddleware');
const { updateUserValidator } = require('../../validators');

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

// multer 모킹
jest.mock('../../configs/multer/multerConfig', () => ({
  profileUpload: {
    single: jest.fn().mockImplementation(() => (req, res, next) => {
      // 파일 업로드 미들웨어 모의
      if (req.body.simulateProfileImage) {
        req.file = {
          location: 'https://example.com/mock-profile.jpg',
        };
        delete req.body.simulateProfileImage;
      }
      next();
    }),
  },
}));

// validator 모킹
jest.mock('../../validators', () => ({
  updateUserValidator: [
    (req, res, next) => {
      // 모의 검증 로직
      const hasProfileImage = req.file !== undefined;
      const hasNickname = req.body.nickname !== undefined;

      if (!hasProfileImage && !hasNickname) {
        return res.status(400).json({
          message:
            '업데이트할 정보가 없습니다. 닉네임 또는 프로필 이미지 중 하나 이상을 제공해야 합니다.',
        });
      }

      // 닉네임 길이 검증
      if (
        hasNickname &&
        (req.body.nickname.length < 2 || req.body.nickname.length > 30)
      ) {
        return res.status(400).json({
          message: '입력값이 유효하지 않습니다.',
          errors: ['닉네임은 2자 이상 30자 이하이어야 합니다.'],
        });
      }

      next();
    },
  ],
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

  describe('PATCH /users/me', () => {
    it('닉네임 업데이트에 성공하면 200 상태코드와 업데이트된 사용자 정보를 반환한다', async () => {
      // Arrange
      const mockUserId = 'test-user-id';
      const newNickname = '새로운닉네임';

      const mockUpdatedUser = {
        userId: mockUserId,
        nickname: newNickname,
        email: 'test@test.com',
        profileImgUrl: 'http://example.com/profile.jpg',
      };

      const mockUserDto = {
        userId: mockUserId,
        nickname: newNickname,
        email: 'test@test.com',
        profileImgUrl: 'http://example.com/profile.jpg',
      };

      requireAuth.mockImplementation((req, res, next) => {
        req.user = { userId: mockUserId };
        next();
      });

      userService.updateUser.mockResolvedValue(mockUpdatedUser);
      UserDto.from.mockReturnValue(mockUserDto);

      // Act & Assert
      const response = await request(app)
        .patch('/users/me')
        .send({ nickname: newNickname })
        .expect('Content-Type', /json/)
        .expect(200);

      expect(requireAuth).toHaveBeenCalled();
      expect(userService.updateUser).toHaveBeenCalledWith(mockUserId, {
        nickname: newNickname,
        profileImgUrl: undefined,
      });
      expect(UserDto.from).toHaveBeenCalledWith(mockUpdatedUser);
      expect(response.body).toEqual(mockUserDto);
    });

    it('프로필 이미지 업데이트에 성공하면 200 상태코드와 업데이트된 사용자 정보를 반환한다', async () => {
      // Arrange
      const mockUserId = 'test-user-id';
      const mockImageUrl = 'https://example.com/mock-profile.jpg';

      const mockUpdatedUser = {
        userId: mockUserId,
        nickname: '테스트유저',
        email: 'test@test.com',
        profileImgUrl: mockImageUrl,
      };

      const mockUserDto = {
        userId: mockUserId,
        nickname: '테스트유저',
        email: 'test@test.com',
        profileImgUrl: mockImageUrl,
      };

      requireAuth.mockImplementation((req, res, next) => {
        req.user = { userId: mockUserId };
        next();
      });

      userService.updateUser.mockResolvedValue(mockUpdatedUser);
      UserDto.from.mockReturnValue(mockUserDto);

      // Act & Assert
      const response = await request(app)
        .patch('/users/me')
        .send({ simulateProfileImage: true }) // 파일 업로드 시뮬레이션
        .expect('Content-Type', /json/)
        .expect(200);

      expect(requireAuth).toHaveBeenCalled();
      expect(userService.updateUser).toHaveBeenCalledWith(mockUserId, {
        nickname: undefined,
        profileImgUrl: { location: mockImageUrl },
      });
      expect(UserDto.from).toHaveBeenCalledWith(mockUpdatedUser);
      expect(response.body).toEqual(mockUserDto);
    });

    it('닉네임과 프로필 이미지 모두 업데이트에 성공하면 200 상태코드와 업데이트된 사용자 정보를 반환한다', async () => {
      // Arrange
      const mockUserId = 'test-user-id';
      const newNickname = '새로운닉네임';
      const mockImageUrl = 'https://example.com/mock-profile.jpg';

      const mockUpdatedUser = {
        userId: mockUserId,
        nickname: newNickname,
        email: 'test@test.com',
        profileImgUrl: mockImageUrl,
      };

      const mockUserDto = {
        userId: mockUserId,
        nickname: newNickname,
        email: 'test@test.com',
        profileImgUrl: mockImageUrl,
      };

      requireAuth.mockImplementation((req, res, next) => {
        req.user = { userId: mockUserId };
        next();
      });

      userService.updateUser.mockResolvedValue(mockUpdatedUser);
      UserDto.from.mockReturnValue(mockUserDto);

      // Act & Assert
      const response = await request(app)
        .patch('/users/me')
        .send({
          nickname: newNickname,
          simulateProfileImage: true, // 파일 업로드 시뮬레이션
        })
        .expect('Content-Type', /json/)
        .expect(200);

      expect(requireAuth).toHaveBeenCalled();
      expect(userService.updateUser).toHaveBeenCalledWith(mockUserId, {
        nickname: newNickname,
        profileImgUrl: { location: mockImageUrl },
      });
      expect(UserDto.from).toHaveBeenCalledWith(mockUpdatedUser);
      expect(response.body).toEqual(mockUserDto);
    });

    it('업데이트할 데이터가 없으면 400 에러를 반환한다', async () => {
      // Arrange
      const mockUserId = 'test-user-id';

      requireAuth.mockImplementation((req, res, next) => {
        req.user = { userId: mockUserId };
        next();
      });

      // Act & Assert
      const response = await request(app)
        .patch('/users/me')
        .send({}) // 빈 요청
        .expect('Content-Type', /json/)
        .expect(400);

      expect(requireAuth).toHaveBeenCalled();
      expect(userService.updateUser).not.toHaveBeenCalled();
      expect(response.body).toHaveProperty(
        'message',
        '업데이트할 정보가 없습니다. 닉네임 또는 프로필 이미지 중 하나 이상을 제공해야 합니다.'
      );
    });

    it('닉네임 형식이 유효하지 않으면 400 에러를 반환한다', async () => {
      // Arrange
      const mockUserId = 'test-user-id';
      const invalidNickname = 'a'; // 2자 미만으로 유효하지 않음

      requireAuth.mockImplementation((req, res, next) => {
        req.user = { userId: mockUserId };
        next();
      });

      // Act & Assert
      const response = await request(app)
        .patch('/users/me')
        .send({ nickname: invalidNickname })
        .expect('Content-Type', /json/)
        .expect(400);

      expect(requireAuth).toHaveBeenCalled();
      expect(userService.updateUser).not.toHaveBeenCalled();
      expect(response.body).toHaveProperty(
        'message',
        '입력값이 유효하지 않습니다.'
      );
    });

    it('프로필 업데이트 중 에러가 발생하면 400 에러를 반환한다', async () => {
      // Arrange
      const mockUserId = 'test-user-id';
      const newNickname = '새로운닉네임';
      const errorMessage = '프로필 업데이트에 실패했습니다.';

      requireAuth.mockImplementation((req, res, next) => {
        req.user = { userId: mockUserId };
        next();
      });

      userService.updateUser.mockRejectedValue(new Error(errorMessage));

      // Act & Assert
      const response = await request(app)
        .patch('/users/me')
        .send({ nickname: newNickname })
        .expect('Content-Type', /json/)
        .expect(400);

      expect(requireAuth).toHaveBeenCalled();
      expect(userService.updateUser).toHaveBeenCalledWith(mockUserId, {
        nickname: newNickname,
        profileImgUrl: undefined,
      });
      expect(response.body).toEqual({
        message: errorMessage,
      });
    });

    it('인증되지 않은 사용자는 접근할 수 없다', async () => {
      // Arrange
      requireAuth.mockImplementation((req, res, next) => {
        res.status(401).json({ message: 'Unauthorized' });
      });

      // Act & Assert
      const response = await request(app)
        .patch('/users/me')
        .send({ nickname: '새로운닉네임' })
        .expect('Content-Type', /json/)
        .expect(401);

      expect(requireAuth).toHaveBeenCalled();
      expect(userService.updateUser).not.toHaveBeenCalled();
      expect(response.body).toEqual({
        message: 'Unauthorized',
      });
    });
  });
});
