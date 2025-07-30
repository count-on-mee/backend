const {
  requireAuth,
  optionalAuth,
  refreshTokenAuth,
  adminAuth,
} = require('./authMiddleware');

module.exports = {
  requireAuth,
  optionalAuth,
  refreshTokenAuth,
  adminAuth,
};
