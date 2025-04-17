require('./configs/envConfig');
require('./configs/passport');

const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const { authRouter } = require('./routers');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

app.use('/auth', authRouter);

module.exports = app;
