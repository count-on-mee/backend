const { JwtUtil } = require('../utils');

const validateToken = (authHeader) => {
  const token = JwtUtil.extractTokenFromHeader(authHeader);
  const decoded = JwtUtil.verifyToken(token);
  return { userId: decoded.userId };
};

exports.strictAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // 토큰이 없는 경우: 비로그인 사용자
    if (!authHeader) {
      return res.status(401).json({ message: '인증이 필요합니다.' });
    }

    // 토큰이 있는 경우: 로그인 사용자
    req.user = validateToken(authHeader);
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
    req.user = validateToken(authHeader);
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
