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
const path = require('path');

dotenv.config();

const app = express();
app.use(express.json());
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
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
    allowedHeaders: ['Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    exposedHeaders: ['Authorization']
  })
);

app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/spots', spotRoute);
app.use('/curations', curationRoute);

//사진업로드(임시)
const uploadDir = path.join(process.cwd(), 'uploads');
app.use('/uploads', express.static(uploadDir));

const PORT = process.env.PORT || 8080;
app.listen(PORT);
