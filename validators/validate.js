const { validationResult } = require('express-validator');

const validate = (customCheck) => {
  return (req, res, next) => {
    if (customCheck && typeof customCheck === 'function') {
      const customCheckResult = customCheck(req, res);
      if (customCheckResult === false) {
        return;
      }
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: '입력값이 유효하지 않습니다.',
        errors: errors.array().map((err) => err.msg),
      });
    }

    next();
  };
};

module.exports = {
  validate,
};
