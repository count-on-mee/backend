require('./config/passport');

const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');
const dotenv = require('dotenv');
const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/authRoute');
const spotRoute = require('./routes/spotRoute');
const curationRoute = require('./routes/curationRoute');

dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());


app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/spots', spotRoute);
app.use('/curations', curationRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT);
