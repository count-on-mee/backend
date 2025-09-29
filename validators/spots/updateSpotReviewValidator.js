const { body } = require('express-validator');
const { validate } = require('../validate');

const reviewContentValidationRules = [
  body('content')
    .optional()
    .isLength({ max: 1000 })
    .withMessage('리뷰 내용은 1,000자를 초과할 수 없습니다.')
    .matches(/^[^<>]*$/)
    .withMessage('HTML 태그는 사용할 수 없습니다.'),
  body('deleteImgUrls')
    .optional()
    .isArray({ min: 1 })
    .withMessage(
      '삭제할 이미지 URL은 최소 1개 이상 포함된 배열 형태여야 합니다.'
    ),
];

const checkRequiredFields = (req, res) => {
  const content =
    typeof req.body.content === 'string' ? req.body.content.trim() : '';
  const hasContent = content.length > 0;

  const deleteImgUrls = Array.isArray(req.body.deleteImgUrls)
    ? req.body.deleteImgUrls
    : [];
  const hasDeleteUrls = deleteImgUrls.length > 0;

  const files = Array.isArray(req.files) ? req.files : [];
  const hasAddedImages = files.length > 0;

  const anyProvided = hasContent || hasDeleteUrls || hasAddedImages;
  if (!anyProvided) {
    res.status(400).json({
      message:
        '업데이트할 정보가 없습니다. content, deleteImgUrls, reviewImgs 중 하나 이상을 제공해야 합니다.',
    });
    return false;
  }
  return true;
};

const updateReviewValidator = [
  ...reviewContentValidationRules,
  validate(checkRequiredFields),
];

module.exports = updateReviewValidator;
