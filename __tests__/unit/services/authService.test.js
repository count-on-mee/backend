const authService = require('../../../services/authService');
const { JwtUtil } = require('../../../utils');

// JwtUtil 모듈 mock
jest.mock('../../../utils/JwtUtil', () => ({
  generateAccessToken: jest.fn(),
  generateRefreshToken: jest.fn(),
  verifyToken: jest.fn(),
}));

describe('authService 테스트', () => {
  let mockUser;
  let mockDecodedToken;
  const refreshToken = 'test-refresh-token';
  const thresholdTime = 1 * 24 * 60 * 60 * 1000; // 1d

  beforeEach(() => {
    // 테스트용 mock 데이터 초기화
    mockUser = {
      userId: '123e4567-e89b-12d3-a456-426614174000',
    };

    // mock 함수 초기화
    jest.clearAllMocks();
  });

  describe('reissue 메서드 테스트', () => {
    it('새로운 액세스 토큰을 발급해야 함', () => {
      // Given
      const mockAccessToken = 'new-access-token';
      const futureTime = Date.now() + thresholdTime + 1000;

      mockDecodedToken = {
        exp: Math.floor(futureTime / 1000),
      };

      JwtUtil.generateAccessToken.mockReturnValue(mockAccessToken);
      JwtUtil.verifyToken.mockReturnValue(mockDecodedToken);

      // When
      const result = authService.reissue(mockUser, refreshToken);

      // Then
      expect(result.newAccessToken).toBe(mockAccessToken);
      expect(result.newRefreshToken).toBeNull();
      expect(result.shouldUpdateRefreshToken).toBe(false);
      expect(JwtUtil.generateAccessToken).toHaveBeenCalledWith(mockUser);
      expect(JwtUtil.verifyToken).toHaveBeenCalledWith(refreshToken, true);
      expect(JwtUtil.generateRefreshToken).not.toHaveBeenCalled();
    });

    it('리프레시 토큰의 만료 시간이 임계값보다 작으면 새로운 리프레시 토큰도 발급해야 함', () => {
      // Given
      const mockAccessToken = 'new-access-token';
      const mockRefreshToken = 'new-refresh-token';
      const nearFutureTime = Date.now() + thresholdTime - 1000;

      mockDecodedToken = {
        exp: Math.floor(nearFutureTime / 1000),
      };

      JwtUtil.generateAccessToken.mockReturnValue(mockAccessToken);
      JwtUtil.generateRefreshToken.mockReturnValue(mockRefreshToken);
      JwtUtil.verifyToken.mockReturnValue(mockDecodedToken);

      // When
      const result = authService.reissue(mockUser, refreshToken);

      // Then
      expect(result.newAccessToken).toBe(mockAccessToken);
      expect(result.newRefreshToken).toBe(mockRefreshToken);
      expect(result.shouldUpdateRefreshToken).toBe(true);
      expect(JwtUtil.generateAccessToken).toHaveBeenCalledWith(mockUser);
      expect(JwtUtil.generateRefreshToken).toHaveBeenCalledWith(mockUser);
      expect(JwtUtil.verifyToken).toHaveBeenCalledWith(refreshToken, true);
    });

    it('리프레시 토큰이 유효하지 않으면 에러를 발생시켜야 함', () => {
      // Given
      const mockError = new Error('Invalid refresh token');
      JwtUtil.verifyToken.mockImplementation(() => {
        throw mockError;
      });

      // When & Then
      expect(() => {
        authService.reissue(mockUser, refreshToken);
      }).toThrow(mockError);
    });
  });
});
