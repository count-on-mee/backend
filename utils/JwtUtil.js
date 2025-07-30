const jwt = require('jsonwebtoken');
const { JwtError } = require('../errors');
const { TokenExpiredError } = jwt;

class JwtUtil {
  static #ACCESS_TOKEN_EXPIRES_IN = '1h';
  static #REFRESH_TOKEN_EXPIRES_IN = '14d';

  static generateAccessToken(user) {
    try {
      return jwt.sign(
        {
          userId: user.userId,
          role: user.role,
          tokenType: 'ACCESS',
        },
        process.env.JWT_ACCESS_SECRET,
        {
          expiresIn: this.#ACCESS_TOKEN_EXPIRES_IN,
          issuer: 'count-on-me',
        }
      );
    } catch (error) {
      throw new JwtError('토큰 생성에 실패했습니다.');
    }
  }

  static generateRefreshToken(user) {
    try {
      return jwt.sign(
        {
          userId: user.userId,
          role: user.role,
          tokenType: 'REFRESH',
        },
        process.env.JWT_REFRESH_SECRET,
        {
          expiresIn: this.#REFRESH_TOKEN_EXPIRES_IN,
          issuer: 'count-on-me',
        }
      );
    } catch (error) {
      throw new JwtError('토큰 생성에 실패했습니다.');
    }
  }

  static getCookieOptions() {
    return {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      domain: '.countonme.site',
      path: '/',
      maxAge: 14 * 24 * 60 * 60 * 1000, // 14d
    };
  }

  static verifyToken(token, isRefreshToken = false) {
    try {
      const decoded = jwt.verify(
        token,
        isRefreshToken
          ? process.env.JWT_REFRESH_SECRET
          : process.env.JWT_ACCESS_SECRET
      );

      // 토큰 타입 검증
      if (isRefreshToken && decoded.tokenType !== 'REFRESH') {
        throw new JwtError('Refresh 토큰이 아닙니다.');
      }
      if (!isRefreshToken && decoded.tokenType !== 'ACCESS') {
        throw new JwtError('Access 토큰이 아닙니다.');
      }

      return decoded;
    } catch (error) {
      if (error instanceof JwtError) {
        throw error;
      }
      if (error instanceof TokenExpiredError) {
        throw new JwtError('토큰이 만료되었습니다.');
      }
      throw new JwtError('유효하지 않은 토큰입니다.');
    }
  }

  static extractTokenFromHeader(header) {
    if (!header?.startsWith('Bearer ')) {
      throw new JwtError('올바른 인증 형식이 아닙니다.');
    }
    return header.split('Bearer ')[1];
  }
}

module.exports = JwtUtil;
