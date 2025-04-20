const request = require('supertest');
const app = require('../../app');
const { sequelize, User } = require('../../models');
const { JwtUtil } = require('../../utils');
const jwt = require('jsonwebtoken');

// multerConfig 모킹
jest.mock('../../configs/multer/multerConfig', () => ({
  profileUpload: {
    single: () => (req, res, next) => {
      // 테스트용 파일 업로드 미들웨어 모의
      if (req.body.simulateProfileImage) {
        req.file = {
          location: 'https://example.com/mock-profile.jpg',
        };
        delete req.body.simulateProfileImage;
      }
      next();
    },
  },
  deleteFile: jest.fn().mockResolvedValue(true),
}));

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

  describe('PATCH /users/me', () => {
    it('인증된 사용자는 닉네임을 변경할 수 있다', async () => {
      // Arrange
      const newNickname = 'UpdatedE2ETestUser';

      // Act
      const response = await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${accessToken}`)
        .send({ nickname: newNickname })
        .expect('Content-Type', /json/)
        .expect(200);

      // Assert
      expect(response.body).toEqual(
        expect.objectContaining({
          userId: testUser.userId,
          name: testUser.name,
          nickname: newNickname,
          email: testUser.email,
        })
      );

      // DB에 실제로 업데이트 됐는지 확인
      const updatedUser = await User.findByPk(testUser.userId);
      expect(updatedUser.nickname).toBe(newNickname);

      // 테스트 이후 원래 닉네임으로 되돌려놓기
      testUser = await updatedUser.update({ nickname: 'E2ETestUser' });
    });

    it('인증된 사용자는 프로필 이미지를 변경할 수 있다', async () => {
      // Arrange
      const mockImageUrl = 'https://example.com/mock-profile.jpg';

      // Act
      const response = await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${accessToken}`)
        .send({ simulateProfileImage: true }) // 파일 업로드 시뮬레이션
        .expect('Content-Type', /json/)
        .expect(200);

      // Assert
      expect(response.body).toEqual(
        expect.objectContaining({
          userId: testUser.userId,
          name: testUser.name,
          nickname: testUser.nickname,
          email: testUser.email,
          profileImgUrl: mockImageUrl,
        })
      );

      // DB에 실제로 업데이트 됐는지 확인
      const updatedUser = await User.findByPk(testUser.userId);
      expect(updatedUser.profileImgUrl).toBe(mockImageUrl);

      // 테스트 이후 원래 프로필 이미지로 되돌려놓기
      testUser = await updatedUser.update({
        profileImgUrl: 'http://example.com/test.jpg',
      });
    });

    it('인증된 사용자는 닉네임과 프로필 이미지를 함께 변경할 수 있다', async () => {
      // Arrange
      const newNickname = 'BothUpdatedUser';
      const mockImageUrl = 'https://example.com/mock-profile.jpg';

      // Act
      const response = await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${accessToken}`)
        .send({
          nickname: newNickname,
          simulateProfileImage: true, // 파일 업로드 시뮬레이션
        })
        .expect('Content-Type', /json/)
        .expect(200);

      // Assert
      expect(response.body).toEqual(
        expect.objectContaining({
          userId: testUser.userId,
          name: testUser.name,
          nickname: newNickname,
          email: testUser.email,
          profileImgUrl: mockImageUrl,
        })
      );

      // DB에 실제로 업데이트 됐는지 확인
      const updatedUser = await User.findByPk(testUser.userId);
      expect(updatedUser.nickname).toBe(newNickname);
      expect(updatedUser.profileImgUrl).toBe(mockImageUrl);

      // 테스트 이후 원래 값으로 되돌려놓기
      testUser = await updatedUser.update({
        nickname: 'E2ETestUser',
        profileImgUrl: 'http://example.com/test.jpg',
      });
    });

    it('업데이트할 정보가 없으면 400 Bad Request를 반환한다', async () => {
      // Act
      const response = await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${accessToken}`)
        .send({}) // 빈 요청
        .expect('Content-Type', /json/)
        .expect(400);

      // Assert
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toContain('업데이트할 정보가 없습니다');
    });

    it('닉네임 형식이 유효하지 않으면 400 Bad Request를 반환한다', async () => {
      // Arrange
      const invalidNickname = 'a'; // 2자 미만으로 유효하지 않음

      // Act
      const response = await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${accessToken}`)
        .send({ nickname: invalidNickname })
        .expect('Content-Type', /json/)
        .expect(400);

      // Assert
      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('errors');
    });

    it('인증되지 않은 사용자는 401 Unauthorized 에러를 반환한다', async () => {
      // Act
      const response = await request(app)
        .patch('/users/me')
        .send({ nickname: '새로운닉네임' })
        .expect('Content-Type', /json/)
        .expect(401);

      // Assert
      expect(response.body).toHaveProperty('message');
    });
  });
});
