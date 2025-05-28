const request = require('supertest');
const express = require('express');
const authRouter = require('../../routers/authRouter');
const authController = require('../../controllers/authController');
const { sequelize, User } = require('../../models');
const cookieParser = require('cookie-parser');

// JwtUtil 모킹
jest.mock('../../utils/JwtUtil', () => ({
  JwtUtil: {
    generateAccessToken: jest.fn(() => 'test-access-token'),
    generateRefreshToken: jest.fn(() => 'test-refresh-token'),
    verifyToken: jest.fn((token) => {
      if (token === 'invalid-token') {
        throw new Error('Invalid token');
      }
      return { userId: 'test-user-id' };
    }),
  },
}));

// passport 모듈 모킹
jest.mock('passport', () => ({
  authenticate: (strategy) => (req, res, next) => {
    if (strategy === 'google' || strategy === 'kakao' || strategy === 'naver') {
      return (req, res, next) => {
        req.user = { userId: 'test-user-id' };
        next();
      };
    }
    return (req, res, next) => next();
  },
  initialize: () => (req, res, next) => next(),
}));

// passport 전략들 모킹
jest.mock('../../configs/passport', () => {});

// 컨트롤러 모킹
jest.mock('../../controllers/authController', () => ({
  authenticate: jest.fn(),
  reissue: jest.fn((req, res) => {
    if (!req.cookies.refreshToken) {
      return res.status(401).json({ message: '로그인 정보가 없습니다.' });
    }
    if (req.cookies.refreshToken === 'invalid-token') {
      return res.status(401).json({ message: '유효하지 않은 토큰입니다.' });
    }
    return res.json({ accessToken: 'new-access-token' });
  }),
  logout: jest.fn((req, res) => {
    res.clearCookie('refreshToken');
    res.json({ message: '로그아웃 되었습니다.' });
  }),
}));

// 미들웨어 모킹
jest.mock('../../middlewares/authMiddleware', () => ({
  refreshTokenAuth: (req, res, next) => {
    if (!req.cookies.refreshToken) {
      return res.status(401).json({ message: '로그인 정보가 없습니다.' });
    }
    req.user = { userId: 'test-user-id' };
    req.refreshToken = req.cookies.refreshToken;
    next();
  },
}));

// 테스트용 Express 앱 생성
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/auth', authRouter);

describe('인증 API 통합 테스트', () => {
  let testUser;
  let accessToken;
  let refreshToken;

  // 테스트 데이터 준비
  beforeAll(async () => {
    try {
      // 테스트용 사용자 생성 (이미 있으면 조회)
      testUser = await User.findOne({
        where: { email: 'test-integration@example.com' },
      });

      if (!testUser) {
        testUser = await User.create({
          name: '테스트 사용자',
          email: 'test-integration@example.com',
          imgUrl: 'https://example.com/profile.jpg',
          oauthProvider: 'google',
          oauthId: 'test-integration-id',
        });
      }

      // 토큰 생성
      const { JwtUtil } = require('../../utils/JwtUtil');
      accessToken = JwtUtil.generateAccessToken(testUser);
      refreshToken = JwtUtil.generateRefreshToken(testUser);
    } catch (error) {
      console.error('테스트 데이터 준비 중 오류:', error);
      throw error;
    }
  });

  // 테스트 종료 후 정리
  afterAll(async () => {
    try {
      if (testUser) {
        await User.destroy({ where: { userId: testUser.userId } });
      }
      await sequelize.close();
    } catch (error) {
      console.error('테스트 데이터 정리 중 오류:', error);
    }
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /auth/reissue', () => {
    it('유효한 리프레시 토큰으로 새 액세스 토큰을 발급받을 수 있어야 함', async () => {
      // When
      const response = await request(app)
        .post('/auth/reissue')
        .set('Cookie', [`refreshToken=${refreshToken}`]);

      // Then
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ accessToken: 'new-access-token' });
    });

    it('리프레시 토큰이 없으면 401 에러를 반환해야 함', async () => {
      // When
      const response = await request(app).post('/auth/reissue');

      // Then
      expect(response.status).toBe(401);
      expect(response.body).toEqual({
        message: '로그인 정보가 없습니다.',
      });
    });

    it('유효하지 않은 리프레시 토큰으로 401 에러를 반환해야 함', async () => {
      // When
      const response = await request(app)
        .post('/auth/reissue')
        .set('Cookie', ['refreshToken=invalid-token']);

      // Then
      expect(response.status).toBe(401);
      expect(response.body).toEqual({
        message: '유효하지 않은 토큰입니다.',
      });
    });
  });

  describe('POST /auth/logout', () => {
    it('로그아웃 시 refreshToken 쿠키가 삭제되어야 함', async () => {
      // When
      const response = await request(app)
        .post('/auth/logout')
        .set('Cookie', [`refreshToken=${refreshToken}`]);

      // Then
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        message: '로그아웃 되었습니다.',
      });

      // 쿠키 삭제 확인
      const cookies = response.headers['set-cookie'] || [];
      const refreshTokenCookie = cookies.find((cookie) =>
        cookie.startsWith('refreshToken=')
      );
      expect(refreshTokenCookie).toBeDefined();
      expect(refreshTokenCookie).toMatch(/refreshToken=;/); // 비어있는 값으로 설정됨
    });

    it('로그인되지 않은 상태에서 로그아웃 시도 시 401 에러를 반환해야 함', async () => {
      // When
      const response = await request(app).post('/auth/logout');

      // Then
      expect(response.status).toBe(401);
      expect(response.body).toEqual({
        message: '로그인 정보가 없습니다.',
      });
    });
  });
});
