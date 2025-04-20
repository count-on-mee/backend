const { body } = require('express-validator');
const { validate } = require('../validate');

const nicknameValidationRules = [
  body('nickname')
    .optional()
    .isLength({ min: 2, max: 30 })
    .withMessage('닉네임은 2자 이상 30자 이하이어야 합니다.')
    .matches(/^[a-zA-Z0-9가-힣\s_-]+$/)
    .withMessage(
      '닉네임에는 알파벳, 숫자, 한글, 공백, 하이픈(-), 언더스코어(_)만 사용할 수 있습니다.'
    ),
];

const checkRequiredFields = (req, res) => {
  const hasProfileImage = req.file !== undefined;
  const hasNickname = req.body && req.body.nickname !== undefined;

  if (!hasProfileImage && !hasNickname) {
    res.status(400).json({
      message:
        '업데이트할 정보가 없습니다. 닉네임 또는 프로필 이미지 중 하나 이상을 제공해야 합니다.',
    });
    return false;
  }
  return true;
};

const updateUserValidator = [
  ...nicknameValidationRules,
  validate(checkRequiredFields),
];

module.exports = updateUserValidator;
