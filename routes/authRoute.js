const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const cookieParser = require('cookie-parser');

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    session: false,
    failureRedirect: '/auth/google',
  }),
  (req, res) => {
    try {
      const { userId, name, nickname, email, profileImgUrl } = req.user;
      const accessToken = jwt.sign(
        {
          userId,
          name,
          nickname,
          email,
          profileImgUrl,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '1h',
        }
      );
      
      res.cookie('accessToken', accessToken, {
        secure: true,
        sameSite: 'strict',
        maxAge: 1 * 60 * 60 * 1000
      })
  
      const refreshToken = jwt.sign(
        { userId },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: '14d' }
      );
      
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'Strict',
        maxAge: 14 * 24 * 60 * 60 * 1000,
        credential: true,
      });

      res.redirect('http://localhost:5173/map');
  } catch (error) {
    console.error('Google Callback Error:', error);
    res.status(500).send('Internal Server Error')
   }
  }
);

router.get(
  '/kakao',
  passport.authenticate('kakao', {
    scope: ['profile_nickname', 'account_email', 'profile_image'],
  })
);

router.get(
  '/kakao/callback',
  passport.authenticate('kakao', {
    session: false,
    failureRedirect: '/auth/kakao',
  }),
  (req, res) => {
    try {
      const { userId, name, nickname, email, profileImgUrl } = req.user;
      const accessToken = jwt.sign(
        {
          userId,
          name,
          nickname,
          email,
          profileImgUrl,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '1h',
        }
      );
      
      res.cookie('accessToken', accessToken, {
        secure: true,
        sameSite: 'strict',
        maxAge: 1 * 60 * 60 * 1000
      })
  
      const refreshToken = jwt.sign(
        { userId },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: '14d' }
      );
      
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'Strict',
        maxAge: 14 * 24 * 60 * 60 * 1000,
        credential: true,
      });

      console.log(req.user, accessToken, refreshToken);

      res.redirect('http://localhost:5173/map');
  } catch (error) {
    console.error('Kakao Callback Error:', error);
    res.status(500).send('Internal Server Error')
   }
  }
);

router.get('/naver', passport.authenticate('naver', { authType: 'reprompt' }));

router.get(
  '/naver/callback',
  passport.authenticate('naver', {
    session: false,
    failureRedirect: '/auth/naver',
  }),
  (req, res) => {
    try {
      const { userId, name, nickname, email, profileImgUrl } = req.user;
      const accessToken = jwt.sign(
        {
          userId,
          name,
          nickname,
          email,
          profileImgUrl,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '1h',
        }
      );
      
      res.cookie('accessToken', accessToken, {
        secure: true,
        sameSite: 'strict',
        maxAge: 1 * 60 * 60 * 1000
      })
  
      const refreshToken = jwt.sign(
        { userId },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: '14d' }
      );
      
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'Strict',
        maxAge: 14 * 24 * 60 * 60 * 1000,
        credential: true,
      });

      console.log(req.user, accessToken, refreshToken);

      res.redirect('http://localhost:5173/map');
  } catch (error) {
    console.error('Kakao Callback Error:', error);
    res.status(500).send('Internal Server Error')
   }
  }
);

router.post('/logout', (req, res) => {
  res.clearCookie('refreshToken', {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  });
  res.status(200).json({message: 'Logged out successfully'});
});

router.post('/token', (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if(!refreshToken){
    return res.status(401).json({ error: 'Unauthorized'});
  }

  jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, decoded) => {
    if(err) {
      return res.status(403).json({ error: 'Invalid refresh token'});
    }

    const newAccessToken = jwt.sign(
      {
        userId: decoded.userId,
        name: decoded.name,
        nickname: decoded.nickname,
        email: decoded.email,
        profileImgUrl: decoded.profileImgUrl,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h'}
    );
    res.cookie('accessToken', newAccessToken, {
      secure: true,
      sameSite: 'strict',
      maxAge: 1 * 60 * 60 * 1000
    });

    const remainingTime = decoded.exp * 1000 - Date.now();
    if (remainingTime > 2 * 24 * 60 * 60 * 1000) {
      return res.status(200).json({ message: 'Refresh token is still valid'});
    }
    const newRefreshToken = jwt.sign(
      { userId: decoded.userId }, 
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: '14d' }
    );
    res.cookie('refreshToken', newRefreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 14 * 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({messeage: 'Access token and refresh token refreshed successfully.'})
  });
});


module.exports = router;
