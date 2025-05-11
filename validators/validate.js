const { validationResult } = require('express-validator');

const validate = (customCheck) => {
  return (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: '입력값이 유효하지 않습니다.',
        errors: errors.array().map((err) => err.msg),
      });
    }

    if (customCheck && typeof customCheck === 'function') {
      if (!customCheck(req, res)) {
        return;
      }
    }

    next();
  };
};

module.exports = {
  validate,
};
