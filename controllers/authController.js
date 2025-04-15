const { JwtUtil } = require('../utils');

exports.authenticate = (req, res) => {
  try {
    const accessToken = JwtUtil.generateAccessToken(req.user);
    const refreshToken = JwtUtil.generateRefreshToken(req.user);

    res.cookie('refreshToken', refreshToken, JwtUtil.getCookieOptions());
    res.redirect(`http://localhost:5173/map?accessToken=${accessToken}`);
  } catch (error) {
    res.status(401).json({ message: '인증 처리 중 오류가 발생했습니다.' });
  }
};
