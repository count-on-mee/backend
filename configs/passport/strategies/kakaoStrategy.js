const KakaoStrategy = require('passport-kakao').Strategy;
const { User } = require('../../../models');
const { NicknameGenerator } = require('../../../utils');

const kakaoStrategy = new KakaoStrategy(
  {
    clientID: process.env.KAKAO_CLIENT_ID,
    callbackURL: process.env.KAKAO_CALLBACK_URI,
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const existingUser = await User.findOne({
        where: {
          oauthProvider: 'kakao',
          oauthId: profile.id,
        },
      });

      if (existingUser) {
        return done(null, existingUser);
      }

      const nickname = await NicknameGenerator.generate();
      const newUser = await User.create({
        name: profile.username,
        nickname,
        email: profile._json.kakao_account.email,
        imgUrl: profile._json.properties.thumbnail_image,
        oauthProvider: 'kakao',
        oauthId: profile.id.toString(),
      });

      return done(null, newUser);
    } catch (error) {
      done(error);
    }
  }
);

module.exports = kakaoStrategy;
