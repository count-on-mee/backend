// UserDto 모킹
const userDtoMock = {
  from: jest.fn().mockImplementation((user) => ({
    userId: user.userId,
    name: user.name,
    nickname: user.nickname,
    email: user.email,
    imgUrl: user.imgUrl,
  })),
  fromMany: jest.fn().mockImplementation((users) =>
    users.map((user) => ({
      userId: user.userId,
      name: user.name,
      nickname: user.nickname,
      email: user.email,
      imgUrl: user.imgUrl,
    }))
  ),
};

// multerConfig 모킹
const multerConfigMock = {
  profileUpload: {
    single: jest.fn().mockImplementation(() => (req, res, next) => {
      if (req.body.simulateProfileImage) {
        req.file = {
          location: 'https://example.com/mock-profile.jpg',
        };
        delete req.body.simulateProfileImage;
      }
      next();
    }),
  },
  deleteFile: jest.fn().mockResolvedValue(true),
};

// JwtUtil 모킹
const jwtUtilMock = {
  generateAccessToken: jest.fn(),
  generateRefreshToken: jest.fn(),
  verifyToken: jest.fn(),
  extractTokenFromHeader: jest.fn(),
  getCookieOptions: jest.fn(),
};

module.exports = {
  userDtoMock,
  multerConfigMock,
  jwtUtilMock,
};
