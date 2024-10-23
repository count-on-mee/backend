const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');
const dotenv = require('dotenv');
require('./config/passport');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
dotenv.config();

const app = express();
app.use(express.json());
app.use(
  session({
    secret: 'your_session_secret',
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.use('/users', userRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT);
