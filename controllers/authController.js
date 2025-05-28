const { JwtUtil } = require('../utils');
const authService = require('../services/authService');

exports.authenticate = (req, res) => {
  try {
    const accessToken = JwtUtil.generateAccessToken(req.user);
    const refreshToken = JwtUtil.generateRefreshToken(req.user);

    res.cookie('refreshToken', refreshToken, JwtUtil.getCookieOptions());
    res.redirect(
      `${process.env.CLIENT_URL}/auth-callback?accessToken=${accessToken}`
    );
  } catch (error) {
    res.status(401).json({ message: '인증 처리 중 오류가 발생했습니다.' });
  }
};

exports.logout = (req, res) => {
  try {
    res.clearCookie('refreshToken', JwtUtil.getCookieOptions());
    res.status(200).json({ message: '로그아웃 되었습니다.' });
  } catch (error) {
    res.status(500).json({ message: '로그아웃 처리 중 오류가 발생했습니다.' });
  }
};

exports.reissue = (req, res) => {
  try {
    const { newAccessToken, newRefreshToken, shouldUpdateRefreshToken } =
      authService.reissue(req.user, req.refreshToken);

    if (shouldUpdateRefreshToken) {
      res.cookie('refreshToken', newRefreshToken, JwtUtil.getCookieOptions());
    }
    res.status(200).json({ accessToken: newAccessToken });
  } catch (error) {
    res.status(401).json({ message: '토큰 재발행에 실패했습니다.' });
  }
};
