/**
 * 인증 흐름에 대한 E2E 테스트
 *
 * 소셜 로그인 성공 이후의 인증 흐름을 테스트합니다.
 */
const request = require('supertest');
const { JwtUtil } = require('../../utils');
const { User, sequelize } = require('../../models');
const jwt = require('jsonwebtoken');

// 간소화된 passport 모킹
jest.mock('passport', () => {
  return {
    initialize: () => (req, res, next) => next(),
    authenticate: (strategy, options) => (req, res, next) => {
      // 소셜 로그인 콜백 성공 시뮬레이션
      if (req.path.includes('/callback')) {
        req.user = {
          userId: 'e2e-test-user-id',
          name: 'E2E 테스트 사용자',
          email: 'e2e-test@example.com',
          oauthProvider: 'google',
          oauthId: 'e2e-test-oauth-id',
        };
      }
      next();
    },
  };
});

// passport 전략들 모킹
jest.mock('../../configs/passport', () => {});

// 앱 임포트
const app = require('../../app');

describe('인증 흐름 E2E 테스트', () => {
  let testUser;
  let accessToken;
  let refreshToken;

  // 테스트 데이터 준비
  beforeAll(async () => {
    try {
      // DB 연결 확인
      await sequelize.authenticate();
      console.log('데이터베이스 연결 성공');

      // 기존 E2E 테스트 사용자가 있으면 삭제
      await User.destroy({
        where: { email: 'e2e-test@example.com' },
      });

      // 테스트용 사용자 생성
      testUser = await User.create({
        userId: 'e2e-test-user-id', // ID 명시적 지정
        name: 'E2E 테스트 사용자',
        email: 'e2e-test@example.com',
        oauthProvider: 'google',
        oauthId: 'e2e-test-oauth-id',
      });

      console.log('테스트용 사용자 생성 완료:', testUser.userId);
    } catch (error) {
      console.error('테스트 데이터 준비 중 오류:', error);
      throw error;
    }
  });

  // 테스트 종료 후 정리
  afterAll(async () => {
    try {
      // 테스트 사용자 삭제
      if (testUser) {
        await User.destroy({ where: { userId: testUser.userId } });
        console.log('테스트 사용자 삭제 완료');
      }

      // 데이터베이스 연결 종료
      await sequelize.close();
      console.log('데이터베이스 연결 종료됨');
    } catch (error) {
      console.error('테스트 데이터 정리 중 오류:', error);
    }
  });

  describe('전체 인증 흐름', () => {
    it('소셜 로그인, 토큰 재발급, 로그아웃 과정이 정상적으로 동작해야 함', async () => {
      // 1. 소셜 로그인 콜백 처리 (소셜 로그인 성공 가정)
      const loginResponse = await request(app)
        .get('/auth/google/callback')
        .expect(302); // 리다이렉트 상태 코드

      // 리다이렉트 URL 확인
      const redirectUrl = loginResponse.headers.location;
      expect(redirectUrl).toContain(
        'http://localhost:5173/auth-callback?accessToken='
      );

      // 응답 쿠키에서 리프레시 토큰 추출
      const cookies = loginResponse.headers['set-cookie'] || [];
      const refreshTokenCookie = cookies.find((cookie) =>
        cookie.startsWith('refreshToken=')
      );
      expect(refreshTokenCookie).toBeDefined();

      // 쿠키에서 실제 토큰 값 추출
      refreshToken = refreshTokenCookie
        .split(';')[0]
        .replace('refreshToken=', '');

      // URL에서 액세스 토큰 추출
      accessToken = redirectUrl.split('accessToken=')[1];

      // 토큰 검증
      expect(refreshToken).toBeTruthy();
      expect(accessToken).toBeTruthy();

      // 액세스 토큰 디코딩 및 검증
      const decoded = jwt.decode(accessToken);
      expect(decoded).toBeTruthy();
      expect(decoded.userId).toBe('e2e-test-user-id');

      // 잠시 대기 (토큰 재발급 시 iat 값이 달라지도록)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 2. 토큰 재발급
      const reissueResponse = await request(app)
        .post('/auth/reissue')
        .set('Cookie', [`refreshToken=${refreshToken}`])
        .expect(200);

      // 새 액세스 토큰 확인
      expect(reissueResponse.body).toHaveProperty('accessToken');
      const newAccessToken = reissueResponse.body.accessToken;
      expect(newAccessToken).toBeTruthy();

      // 토큰이 새로운 것인지 확인 (디코딩 후 발급 시간 비교)
      const oldTokenData = jwt.decode(accessToken);
      const newTokenData = jwt.decode(newAccessToken);

      expect(newTokenData).toBeTruthy();
      expect(oldTokenData.iat).not.toBe(newTokenData.iat); // 발급 시간이 다른지 확인
      expect(newTokenData.userId).toBe('e2e-test-user-id');

      // 3. 로그아웃
      const logoutResponse = await request(app)
        .post('/auth/logout')
        .set('Cookie', [`refreshToken=${refreshToken}`])
        .expect(200);

      // 로그아웃 메시지 확인
      expect(logoutResponse.body).toHaveProperty('message');
      expect(logoutResponse.body.message).toBe('로그아웃 되었습니다.');

      // 쿠키 삭제 확인
      const logoutCookies = logoutResponse.headers['set-cookie'] || [];
      const clearedRefreshTokenCookie = logoutCookies.find((cookie) =>
        cookie.startsWith('refreshToken=')
      );
      expect(clearedRefreshTokenCookie).toBeDefined();
      expect(clearedRefreshTokenCookie).toMatch(/refreshToken=;/); // 비어있는 값으로 설정됨
    });
  });
});
