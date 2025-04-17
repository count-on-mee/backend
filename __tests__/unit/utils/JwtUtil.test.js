const { JwtUtil } = require('../../../utils');
const { JwtError } = require('../../../errors');

describe('JwtUtil 클래스 테스트', () => {
  let mockUser;

  beforeEach(() => {
    mockUser = {
      userId: '123e4567-e89b-12d3-a456-426614174000',
    };
  });

  describe('액세스 토큰 생성 테스트', () => {
    it('유효한 액세스 토큰을 생성해야 함', () => {
      const token = JwtUtil.generateAccessToken(mockUser);
      expect(token).toBeTruthy();
      expect(typeof token).toBe('string');

      const decoded = JwtUtil.verifyToken(token);
      expect(decoded.userId).toBe(mockUser.userId);
      expect(decoded.tokenType).toBe('ACCESS');
    });
  });

  describe('리프레시 토큰 생성 테스트', () => {
    it('유효한 리프레시 토큰을 생성해야 함', () => {
      const token = JwtUtil.generateRefreshToken(mockUser);
      expect(token).toBeTruthy();
      expect(typeof token).toBe('string');

      const decoded = JwtUtil.verifyToken(token, true);
      expect(decoded.userId).toBe(mockUser.userId);
      expect(decoded.tokenType).toBe('REFRESH');
    });
  });

  describe('토큰 검증 테스트', () => {
    it('유효한 액세스 토큰을 정상적으로 검증해야 함', () => {
      const token = JwtUtil.generateAccessToken(mockUser);
      const decoded = JwtUtil.verifyToken(token);
      expect(decoded.userId).toBe(mockUser.userId);
      expect(decoded.tokenType).toBe('ACCESS');
    });

    it('유효한 리프레시 토큰을 정상적으로 검증해야 함', () => {
      const token = JwtUtil.generateRefreshToken(mockUser);
      const decoded = JwtUtil.verifyToken(token, true);
      expect(decoded.userId).toBe(mockUser.userId);
      expect(decoded.tokenType).toBe('REFRESH');
    });

    it('잘못된 형식의 토큰에 대해 JwtError를 발생시켜야 함', () => {
      expect(() => {
        JwtUtil.verifyToken('invalid-token');
      }).toThrow(JwtError);
    });

    it('만료된 토큰에 대해 JwtError를 발생시켜야 함', () => {
      const expiredToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjNlNDU2Ny1lODliLTEyZDMtYTQ1Ni00MjY2MTQxNzQwMDAiLCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE1MTYyMzkwMjJ9.2hDgYBVZLXYUxHOJ5LR8jMm0yKTc5DTYd-xIuX0Uj0I';

      expect(() => {
        JwtUtil.verifyToken(expiredToken);
      }).toThrow(JwtError);
    });

    it('액세스 토큰을 리프레시 토큰으로 검증할 때 JwtError를 발생시켜야 함', () => {
      const accessToken = JwtUtil.generateAccessToken(mockUser);
      expect(() => {
        JwtUtil.verifyToken(accessToken, true);
      }).toThrow(JwtError);
    });

    it('리프레시 토큰을 액세스 토큰으로 검증할 때 JwtError를 발생시켜야 함', () => {
      const refreshToken = JwtUtil.generateRefreshToken(mockUser);
      expect(() => {
        JwtUtil.verifyToken(refreshToken);
      }).toThrow(JwtError);
    });
  });

  describe('헤더에서 토큰 추출 테스트', () => {
    it('Authorization 헤더에서 토큰을 정상적으로 추출해야 함', () => {
      const token = 'valid-token';
      const header = `Bearer ${token}`;
      const extracted = JwtUtil.extractTokenFromHeader(header);
      expect(extracted).toBe(token);
    });

    it('Bearer 접두사가 없는 경우 JwtError를 발생시켜야 함', () => {
      expect(() => {
        JwtUtil.extractTokenFromHeader('invalid-header');
      }).toThrow(JwtError);
    });

    it('빈 Authorization 헤더에 대해 JwtError를 발생시켜야 함', () => {
      expect(() => {
        JwtUtil.extractTokenFromHeader('');
      }).toThrow(JwtError);
    });
  });
});
