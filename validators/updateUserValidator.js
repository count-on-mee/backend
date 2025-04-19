const { body, validationResult } = require('express-validator');

const updateUserValidator = [
  body('nickname')
    .optional()
    .isLength({ min: 2, max: 30 })
    .withMessage('닉네임은 2자 이상 30자 이하이어야 합니다.')
    .matches(/^[a-zA-Z0-9가-힣\s_-]+$/)
    .withMessage(
      '닉네임에는 알파벳, 숫자, 한글, 공백, 하이픈(-), 언더스코어(_)만 사용할 수 있습니다.'
    ),

  (req, res, next) => {
    const hasProfileImage = req.file !== undefined;
    const hasNickname = req.body && req.body.nickname !== undefined;

    if (!hasProfileImage && !hasNickname) {
      return res.status(400).json({
        message:
          '업데이트할 정보가 없습니다. 닉네임 또는 프로필 이미지 중 하나 이상을 제공해야 합니다.',
      });
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: '입력값이 유효하지 않습니다.',
        errors: errors.array().map((err) => err.msg),
      });
    }

    next();
  },
];

module.exports = updateUserValidator;
