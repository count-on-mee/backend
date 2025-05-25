const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('../../../models');
const { NicknameGenerator } = require('../../../utils');

const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URI,
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const existingUser = await User.findOne({
        where: {
          oauthProvider: 'google',
          oauthId: profile.id,
        },
      });

      if (existingUser) {
        return done(null, existingUser);
      }

      const nickname = await NicknameGenerator.generate();
      const newUser = await User.create({
        name: profile._json.name,
        nickname,
        email: profile._json.email,
        imgUrl: profile._json.picture,
        oauthProvider: 'google',
        oauthId: profile._json.sub,
      });

      return done(null, newUser);
    } catch (error) {
      return done(error);
    }
  }
);

module.exports = googleStrategy;
