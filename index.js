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
const scrapRoute = require('./routes/scrapRoute');
const supportRoute = require('./routes/supportRoute');
const tripRoute = require('./routes/tripRoute');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

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
app.use('/scraps', scrapRoute);
app.use('/support', supportRoute);
app.use('/trips', tripRoute);

//사진 임시로 저장
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST'],
  },
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
