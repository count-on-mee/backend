const { JwtUtil } = require('../utils');

const validateAccessToken = (authHeader) => {
  const token = JwtUtil.extractTokenFromHeader(authHeader);
  const decoded = JwtUtil.verifyToken(token);
  return { userId: decoded.userId };
};

const validateRefreshToken = (refreshToken) => {
  const decoded = JwtUtil.verifyToken(refreshToken, true);
  return { userId: decoded.userId };
};

exports.requireAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // 토큰이 없는 경우: 비로그인 사용자
    if (!authHeader) {
      return res.status(401).json({ message: '인증이 필요합니다.' });
    }

    // 토큰이 있는 경우: 로그인 사용자
    req.user = validateAccessToken(authHeader);
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

exports.optionalAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // 토큰이 없는 경우: 비로그인 사용자
    if (!authHeader) {
      req.user = null;
      return next();
    }

    // 토큰이 있는 경우: 로그인 사용자
    req.user = validateAccessToken(authHeader);
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

exports.refreshTokenAuth = (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: '로그인 정보가 없습니다.' });
    }

    req.user = validateRefreshToken(refreshToken);
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
