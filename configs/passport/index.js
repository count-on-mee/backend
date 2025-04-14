const passport = require('passport');
const googleStrategy = require('./strategies/googleStrategy');

passport.use(googleStrategy);

passport.serializeUser((user, done) => {
  done(null, user.userId);
});

passport.deserializeUser(async (userId, done) => {
  done(null, userId);
});
