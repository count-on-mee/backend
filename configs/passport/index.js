const passport = require('passport');
const googleStrategy = require('./strategies/googleStrategy');
const kakaoStrategy = require('./strategies/kakaoStrategy');
const naverStrategy = require('./strategies/naverStrategy');

passport.use(googleStrategy);
passport.use(kakaoStrategy);
passport.use(naverStrategy);

passport.serializeUser((user, done) => {
  done(null, user.userId);
});

passport.deserializeUser(async (userId, done) => {
  done(null, userId);
});
