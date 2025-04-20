const request = require('supertest');
const { JwtUtil } = require('../../utils');
const { sequelize, User } = require('../../models');

// passport 모듈 모킹
jest.mock('passport', () => {
  return {
    initialize: () => (req, res, next) => next(),
    authenticate: () => (req, res, next) => {
      req.user = { userId: 'test-user-id' };
      next();
    },
  };
});

// passport 전략들 모킹
jest.mock('../../configs/passport', () => {});

// app 임포트
const app = require('../../app');

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
          oauthProvider: 'google',
          oauthId: 'test-integration-id',
        });
      }

      // 토큰 생성
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

  describe('POST /auth/reissue', () => {
    it('유효한 리프레시 토큰으로 새 액세스 토큰을 발급받을 수 있어야 함', async () => {
      // Given
      const cookieValue = `refreshToken=${refreshToken}`;

      // When
      const response = await request(app)
        .post('/auth/reissue')
        .set('Cookie', [cookieValue])
        .expect(200);

      // Then
      expect(response.body).toHaveProperty('accessToken');
      expect(typeof response.body.accessToken).toBe('string');
    });

    it('리프레시 토큰이 없으면 401 에러를 반환해야 함', async () => {
      // When
      const response = await request(app).post('/auth/reissue').expect(401);

      // Then
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('로그인 정보가 없습니다.');
    });

    it('유효하지 않은 리프레시 토큰으로 401 에러를 반환해야 함', async () => {
      // Given
      const invalidToken = 'invalid-token';

      // When
      const response = await request(app)
        .post('/auth/reissue')
        .set('Cookie', [`refreshToken=${invalidToken}`])
        .expect(401);

      // Then
      expect(response.body).toHaveProperty('message');
    });
  });

  describe('POST /auth/logout', () => {
    it('로그아웃 시 refreshToken 쿠키가 삭제되어야 함', async () => {
      // Given
      const cookieValue = `refreshToken=${refreshToken}`;

      // When
      const response = await request(app)
        .post('/auth/logout')
        .set('Cookie', [cookieValue])
        .expect(200);

      // Then
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('로그아웃 되었습니다.');

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
      const response = await request(app).post('/auth/logout').expect(401);

      // Then
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('로그인 정보가 없습니다.');
    });
  });
});
