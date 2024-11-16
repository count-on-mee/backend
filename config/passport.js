const passport = require('passport');
const dotenv = require('dotenv');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const KakaoStrategy = require('passport-kakao').Strategy;
const NaverStrategy = require('passport-naver-v2').Strategy;
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
            profileImgUrl: profile._json.picture,
            oauthProvider: 'google',
            oauthId: profile._json.sub,
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
            name: profile.username,
            nickname,
            email: profile._json.kakao_account.email,
            profileImgUrl: profile._json.properties.thumbnail_image,
            oauthProvider: 'kakao',
            oauthId: profile.id.toString(),
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
  new NaverStrategy(
    {
      clientID: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
      callbackURL: process.env.NAVER_CALLBACK_URI,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({
          where: { oauth_provider: 'naver', oauth_id: profile.id },
        });
        if (!user) {
          const nickname = nicknameGenerator();
          user = await User.create({
            name: profile.name,
            nickname,
            email: profile.email,
            profileImgUrl: profile.profileImage,
            oauthProvider: 'naver',
            oauthId: profile.id,
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
