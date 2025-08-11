const { body } = require('express-validator');
const { validate } = require('../validate');

const VALID_CATEGORIES = [
  '식당',
  '카페',
  '숙소',
  '관광지',
  '자연',
  '복합 문화 공간',
  '박물관',
  '미술관',
  '도서관',
  '역사',
  '종교',
];

const createSpotValidationRules = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('스팟 이름은 필수입니다.')
    .isLength({ min: 1, max: 100 })
    .withMessage('스팟 이름은 1자 이상 100자 이하여야 합니다.'),

  body('address')
    .trim()
    .notEmpty()
    .withMessage('주소는 필수입니다.')
    .isLength({ min: 1, max: 200 })
    .withMessage('주소는 1자 이상 200자 이하여야 합니다.'),

  body('tel')
    .optional()
    .trim()
    .isLength({ max: 20 })
    .withMessage('전화번호는 20자 이하여야 합니다.'),

  body('latitude')
    .notEmpty()
    .withMessage('위도는 필수입니다.')
    .isFloat({ min: -90.0, max: 90.0 })
    .withMessage('위도는 -90.0 ~ 90.0 사이의 값이어야 합니다.'),

  body('longitude')
    .notEmpty()
    .withMessage('경도는 필수입니다.')
    .isFloat({ min: -180.0, max: 180.0 })
    .withMessage('경도는 -180.0 ~ 180.0 사이의 값이어야 합니다.'),

  body('categories')
    .custom((categories) => {
      // 문자열로 전송된 경우 JSON 파싱
      let parsedCategories = categories;
      if (typeof categories === 'string') {
        try {
          parsedCategories = JSON.parse(categories);
        } catch (error) {
          throw new Error('카테고리 형식이 올바르지 않습니다.');
        }
      }
      // 배열인지 확인
      if (!Array.isArray(parsedCategories)) {
        throw new Error('카테고리는 배열 형태여야 합니다.');
      }
      // 최소 1개 이상인지 확인
      if (parsedCategories.length < 1) {
        throw new Error('카테고리는 최소 1개 이상 포함되어야 합니다.');
      }

      // 유효한 카테고리인지 확인
      const invalidCategories = parsedCategories.filter(
        (category) => !VALID_CATEGORIES.includes(category)
      );
      if (invalidCategories.length > 0) {
        throw new Error(
          `유효하지 않은 카테고리: ${invalidCategories.join(', ')}`
        );
      }
      return true;
    })
    .withMessage('카테고리 검증에 실패했습니다.'),
];

const createSpotValidator = [...createSpotValidationRules, validate()];

module.exports = createSpotValidator;
