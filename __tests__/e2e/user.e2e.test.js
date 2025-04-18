const request = require('supertest');
const app = require('../../app');
const { sequelize, User } = require('../../models');
const { JwtUtil } = require('../../utils');
const jwt = require('jsonwebtoken');

describe('User API E2E Test', () => {
  let testUser;
  let accessToken;

  beforeAll(async () => {
    // 테스트용 사용자 생성
    testUser = await User.create({
      name: 'test',
      nickname: 'E2ETestUser',
      email: 'e2etest@example.com',
      profileImgUrl: 'http://example.com/test.jpg',
      oauthProvider: 'google',
      oauthId: 'test',
    });

    // JWT 토큰 생성
    accessToken = JwtUtil.generateAccessToken(testUser);
  });

  afterAll(async () => {
    // 테스트용 사용자 삭제
    await User.destroy({ where: { userId: testUser.userId } });
    await sequelize.close();
  });

  describe('GET /users/me', () => {
    it('인증된 사용자는 자신의 정보를 조회할 수 있다', async () => {
      // Act
      const response = await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${accessToken}`)
        .expect('Content-Type', /json/)
        .expect(200);

      // Assert
      expect(response.body).toEqual(
        expect.objectContaining({
          userId: testUser.userId,
          name: testUser.name,
          nickname: testUser.nickname,
          email: testUser.email,
          profileImgUrl: testUser.profileImgUrl,
        })
      );
    });

    it('인증되지 않은 사용자는 401 Unauthorized 에러를 반환한다', async () => {
      // Act
      const response = await request(app)
        .get('/users/me')
        .expect('Content-Type', /json/)
        .expect(401);

      // Assert
      expect(response.body).toHaveProperty('message');
    });

    it('잘못된 JWT 토큰으로는 401 Unauthorized 에러를 반환한다', async () => {
      // Act
      const response = await request(app)
        .get('/users/me')
        .set('Authorization', 'Bearer invalid_token')
        .expect('Content-Type', /json/)
        .expect(401);

      // Assert
      expect(response.body).toHaveProperty('message');
    });

    it('만료된 JWT 토큰으로는 401 Unauthorized 에러를 반환한다', async () => {
      // Arrange
      const expiredToken = jwt.sign(
        {
          userId: testUser.userId,
          tokenType: 'ACCESS',
        },
        process.env.JWT_ACCESS_SECRET,
        {
          expiresIn: '0s', // 즉시 만료
          issuer: 'count-on-me',
        }
      );

      // Act
      const response = await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${expiredToken}`)
        .expect('Content-Type', /json/)
        .expect(401);

      // Assert
      expect(response.body).toHaveProperty('message');
    });
  });
});
