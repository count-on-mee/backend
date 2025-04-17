const {
  authenticate,
  logout,
  reissue,
} = require('../../../controllers/authController');
const authService = require('../../../services/authService');
const { JwtUtil } = require('../../../utils');

// JwtUtil과 authService 모듈 mock
jest.mock('../../../utils/JwtUtil', () => ({
  generateAccessToken: jest.fn(),
  generateRefreshToken: jest.fn(),
  getCookieOptions: jest.fn(),
}));

jest.mock('../../../services/authService', () => ({
  reissue: jest.fn(),
}));

describe('authController 테스트', () => {
  let req;
  let res;

  beforeEach(() => {
    // 요청/응답 객체 mock 설정
    req = {
      user: { userId: '123e4567-e89b-12d3-a456-426614174000' },
      refreshToken: 'test-refresh-token',
    };

    res = {
      cookie: jest.fn(),
      clearCookie: jest.fn(),
      redirect: jest.fn(),
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // mock 함수 초기화
    jest.clearAllMocks();
  });

  describe('authenticate 핸들러 테스트', () => {
    it('인증 성공 시 토큰을 발급하고 리다이렉트해야 함', () => {
      // Given
      const mockAccessToken = 'access-token-123';
      const mockRefreshToken = 'refresh-token-456';
      const mockCookieOptions = {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 14 * 24 * 60 * 60 * 1000,
      };

      JwtUtil.generateAccessToken.mockReturnValue(mockAccessToken);
      JwtUtil.generateRefreshToken.mockReturnValue(mockRefreshToken);
      JwtUtil.getCookieOptions.mockReturnValue(mockCookieOptions);

      // When
      authenticate(req, res);

      // Then
      expect(JwtUtil.generateAccessToken).toHaveBeenCalledWith(req.user);
      expect(JwtUtil.generateRefreshToken).toHaveBeenCalledWith(req.user);
      expect(res.cookie).toHaveBeenCalledWith(
        'refreshToken',
        mockRefreshToken,
        mockCookieOptions
      );
      expect(res.redirect).toHaveBeenCalledWith(
        `http://localhost:5173/auth-callback?accessToken=${mockAccessToken}`
      );
    });

    it('인증 처리 중 오류 발생 시 401 응답을 반환해야 함', () => {
      // Given
      JwtUtil.generateAccessToken.mockImplementation(() => {
        throw new Error('토큰 생성 오류');
      });

      // When
      authenticate(req, res);

      // Then
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({
        message: '인증 처리 중 오류가 발생했습니다.',
      });
    });
  });

  describe('logout 핸들러 테스트', () => {
    it('로그아웃 성공 시 쿠키를 삭제하고 200 응답을 반환해야 함', () => {
      // Given
      const mockCookieOptions = {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      };
      JwtUtil.getCookieOptions.mockReturnValue(mockCookieOptions);

      // When
      logout(req, res);

      // Then
      expect(res.clearCookie).toHaveBeenCalledWith(
        'refreshToken',
        mockCookieOptions
      );
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: '로그아웃 되었습니다.',
      });
    });

    it('로그아웃 처리 중 오류 발생 시 500 응답을 반환해야 함', () => {
      // Given
      res.clearCookie.mockImplementation(() => {
        throw new Error('쿠키 삭제 오류');
      });

      // When
      logout(req, res);

      // Then
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: '로그아웃 처리 중 오류가 발생했습니다.',
      });
    });
  });

  describe('reissue 핸들러 테스트', () => {
    it('새로운 액세스 토큰만 발급해야 하는 경우', () => {
      // Given
      const mockResult = {
        newAccessToken: 'new-access-token',
        newRefreshToken: null,
        shouldUpdateRefreshToken: false,
      };
      authService.reissue.mockReturnValue(mockResult);

      // When
      reissue(req, res);

      // Then
      expect(authService.reissue).toHaveBeenCalledWith(
        req.user,
        req.refreshToken
      );
      expect(res.cookie).not.toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        accessToken: mockResult.newAccessToken,
      });
    });

    it('새로운 액세스 토큰과 리프레시 토큰을 모두 발급해야 하는 경우', () => {
      // Given
      const mockResult = {
        newAccessToken: 'new-access-token',
        newRefreshToken: 'new-refresh-token',
        shouldUpdateRefreshToken: true,
      };
      const mockCookieOptions = {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 14 * 24 * 60 * 60 * 1000,
      };

      authService.reissue.mockReturnValue(mockResult);
      JwtUtil.getCookieOptions.mockReturnValue(mockCookieOptions);

      // When
      reissue(req, res);

      // Then
      expect(authService.reissue).toHaveBeenCalledWith(
        req.user,
        req.refreshToken
      );
      expect(res.cookie).toHaveBeenCalledWith(
        'refreshToken',
        mockResult.newRefreshToken,
        mockCookieOptions
      );
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        accessToken: mockResult.newAccessToken,
      });
    });

    it('토큰 재발행 중 오류 발생 시 401 응답을 반환해야 함', () => {
      // Given
      authService.reissue.mockImplementation(() => {
        throw new Error('토큰 재발행 오류');
      });

      // When
      reissue(req, res);

      // Then
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({
        message: '토큰 재발행에 실패했습니다.',
      });
    });
  });
});
