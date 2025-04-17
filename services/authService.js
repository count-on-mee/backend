const { JwtUtil } = require('../utils');

exports.reissue = (user, refreshToken) => {
  const newAccessToken = JwtUtil.generateAccessToken(user);
  let newRefreshToken = null;
  let shouldUpdateRefreshToken = false;

  const decoded = JwtUtil.verifyToken(refreshToken, true);
  const remainingTime = decoded.exp * 1000 - Date.now();
  const thresholdTime = 1 * 24 * 60 * 60 * 1000; // 1d

  if (remainingTime < thresholdTime) {
    newRefreshToken = JwtUtil.generateRefreshToken(user);
    shouldUpdateRefreshToken = true;
  }

  return {
    newAccessToken,
    newRefreshToken,
    shouldUpdateRefreshToken,
  };
};
