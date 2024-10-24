const passport = require('passport');
const dotenv = require('dotenv');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
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
        let user = await User.findOne({ where: { oauth_id: profile.id } });
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

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  done(null, id);
});
