const NaverStrategy = require('passport-naver-v2').Strategy;
const { User } = require('../../../models');
const { NicknameGenerator } = require('../../../utils');

const naverStrategy = new NaverStrategy(
  {
    clientID: process.env.NAVER_CLIENT_ID,
    clientSecret: process.env.NAVER_CLIENT_SECRET,
    callbackURL: process.env.NAVER_CALLBACK_URI,
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const existingUser = await User.findOne({
        where: {
          oauthProvider: 'naver',
          oauthId: profile.id,
        },
      });

      if (existingUser) {
        return done(null, existingUser);
      }

      const nickname = await NicknameGenerator.generate();
      const newUser = await User.create({
        name: profile.name,
        nickname,
        email: profile.email,
        profileImgUrl: profile.profileImage,
        oauthProvider: 'naver',
        oauthId: profile.id,
      });

      return done(null, newUser);
    } catch (error) {
      return done(error);
    }
  }
);

module.exports = naverStrategy;
