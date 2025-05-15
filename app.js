require('./configs/envConfig');
require('./configs/passport');

const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const {
  authRouter,
  userRouter,
  spotRouter,
  curationRouter,
  scrapRouter,
  tripRouter,
} = require('./routers');

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/spots', spotRouter);
app.use('/curations', curationRouter);
app.use('/scraps', scrapRouter);
app.use('/trips', tripRouter);

module.exports = app;
