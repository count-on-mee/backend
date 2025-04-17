const {
  requireAuth,
  optionalAuth,
  refreshTokenAuth,
} = require('../../../middlewares');
const { JwtUtil } = require('../../../utils');

// JwtUtil 모듈 mock
jest.mock('../../../utils/JwtUtil', () => ({
  extractTokenFromHeader: jest.fn(),
  verifyToken: jest.fn(),
}));

describe('authMiddleware 테스트', () => {
  let req;
  let res;
  let next;
  let mockUser;

  beforeEach(() => {
    // 기본 요청, 응답, next 함수 mock 설정
    req = {
      headers: {},
      cookies: {},
    };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    next = jest.fn();

    mockUser = {
      userId: '123e4567-e89b-12d3-a456-426614174000',
    };

    // mock 함수 초기화
    jest.clearAllMocks();
  });

  describe('requireAuth 미들웨어 테스트', () => {
    it('유효한 토큰이 있을 경우 인증을 통과시키고 next()를 호출해야 함', () => {
      // Given
      req.headers.authorization = 'Bearer valid-token';
      JwtUtil.extractTokenFromHeader.mockReturnValue('valid-token');
      JwtUtil.verifyToken.mockReturnValue({ userId: mockUser.userId });

      // When
      requireAuth(req, res, next);

      // Then
      expect(JwtUtil.extractTokenFromHeader).toHaveBeenCalledWith(
        'Bearer valid-token'
      );
      expect(JwtUtil.verifyToken).toHaveBeenCalledWith('valid-token');
      expect(req.user).toEqual(mockUser);
      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
    });

    it('Authorization 헤더가 없는 경우 401 오류를 반환해야 함', () => {
      // Given
      req.headers.authorization = undefined;

      // When
      requireAuth(req, res, next);

      // Then
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: '인증이 필요합니다.' });
      expect(next).not.toHaveBeenCalled();
    });

    it('토큰 검증 중 오류가 발생할 경우 401 오류를 반환해야 함', () => {
      // Given
      req.headers.authorization = 'Bearer invalid-token';
      const mockError = new Error('유효하지 않은 토큰입니다.');
      JwtUtil.extractTokenFromHeader.mockImplementation(() => {
        throw mockError;
      });

      // When
      requireAuth(req, res, next);

      // Then
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: mockError.message });
      expect(next).not.toHaveBeenCalled();
    });
  });

  describe('optionalAuth 미들웨어 테스트', () => {
    it('토큰이 없는 경우 req.user를 null로 설정하고 next()를 호출해야 함', () => {
      // Given
      req.headers.authorization = undefined;

      // When
      optionalAuth(req, res, next);

      // Then
      expect(req.user).toBeNull();
      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
    });

    it('유효한 토큰이 있을 경우 인증을 통과시키고 next()를 호출해야 함', () => {
      // Given
      req.headers.authorization = 'Bearer valid-token';
      JwtUtil.extractTokenFromHeader.mockReturnValue('valid-token');
      JwtUtil.verifyToken.mockReturnValue({ userId: mockUser.userId });

      // When
      optionalAuth(req, res, next);

      // Then
      expect(req.user).toEqual(mockUser);
      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
    });

    it('토큰 검증 중 오류가 발생할 경우 401 오류를 반환해야 함', () => {
      // Given
      req.headers.authorization = 'Bearer invalid-token';
      const mockError = new Error('유효하지 않은 토큰입니다.');
      JwtUtil.extractTokenFromHeader.mockImplementation(() => {
        throw mockError;
      });

      // When
      optionalAuth(req, res, next);

      // Then
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: mockError.message });
      expect(next).not.toHaveBeenCalled();
    });
  });

  describe('refreshTokenAuth 미들웨어 테스트', () => {
    it('유효한 리프레시 토큰이 있을 경우 인증을 통과시키고 next()를 호출해야 함', () => {
      // Given
      req.cookies.refreshToken = 'valid-refresh-token';
      JwtUtil.verifyToken.mockReturnValue({ userId: mockUser.userId });

      // When
      refreshTokenAuth(req, res, next);

      // Then
      expect(JwtUtil.verifyToken).toHaveBeenCalledWith(
        'valid-refresh-token',
        true
      );
      expect(req.user).toEqual(mockUser);
      expect(req.refreshToken).toBe('valid-refresh-token');
      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
    });

    it('리프레시 토큰이 없는 경우 401 오류를 반환해야 함', () => {
      // Given
      req.cookies.refreshToken = undefined;

      // When
      refreshTokenAuth(req, res, next);

      // Then
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({
        message: '로그인 정보가 없습니다.',
      });
      expect(next).not.toHaveBeenCalled();
    });

    it('리프레시 토큰 검증 중 오류가 발생할 경우 401 오류를 반환해야 함', () => {
      // Given
      req.cookies.refreshToken = 'invalid-refresh-token';
      const mockError = new Error('유효하지 않은 토큰입니다.');
      JwtUtil.verifyToken.mockImplementation(() => {
        throw mockError;
      });

      // When
      refreshTokenAuth(req, res, next);

      // Then
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: mockError.message });
      expect(next).not.toHaveBeenCalled();
    });
  });
});
