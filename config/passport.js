const passport = require('passport');
const dotenv = require('dotenv');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const KakaoStrategy = require('passport-kakao').Strategy;
const { User } = require('../models');
const { nicknameGenerator } = require('../utils');

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URI,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({
          where: { oauth_provider: 'google', oauth_id: profile.id },
        });
        if (!user) {
          const nickname = nicknameGenerator();
          user = await User.create({
            name: profile._json.name,
            nickname,
            email: profile._json.email,
            profile_img_url: profile._json.picture,
            oauth_provider: 'google',
            oauth_id: profile._json.sub,
          });
        }
        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);

passport.use(
  new KakaoStrategy(
    {
      clientID: process.env.KAKAO_CLIENT_ID,
      callbackURL: process.env.KAKAO_CALLBACK_URI,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({
          where: { oauth_provider: 'kakao', oauth_id: profile.id },
        });
        if (!user) {
          const nickname = nicknameGenerator();
          user = await User.create({
            name: profile._json.kakao_account.profile.nickname,
            nickname,
            email: profile._json.kakao_account.email,
            profile_img_url:
              profile._json.kakao_account.profile.thumbnail_image_url,
            oauth_provider: 'kakao',
            oauth_id: profile._json.id,
          });
        }
        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  done(null, id);
});
