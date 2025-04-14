require('dotenv').config();
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

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
