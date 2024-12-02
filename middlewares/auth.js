const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (token == null || token == 'undefined')
    return res.status(401).send('No token provided.');

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).send('Failed to authenticate token.');
    req.user = decoded;
    next();
  });
};

exports.optionalVerifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (token == null || token == 'undefined') {
    req.user = null;
    return next();
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      req.user = null;
    } else {
      req.user = decoded;
    }
    next();
  });
};
