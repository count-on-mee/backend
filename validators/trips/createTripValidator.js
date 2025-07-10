const { body } = require('express-validator');
const { validate } = require('../validate');

const VALID_DESTINATIONS = [
  '서울',
  '부산',
  '제주',
  '강릉',
  '경주',
  '여수',
  '전주',
  '속초',
  '인천',
  '대구',
  '울산',
  '광주',
  '남원',
  '포항',
  '대전',
];

const createTripValidationRules = [
  body('title').notEmpty().withMessage('제목은 필수 입력 항목입니다.'),
  body('destinations')
    .isArray({ min: 1 })
    .withMessage('목적지는 최소 1개 이상 포함된 배열 형태여야 합니다.')
    .custom((destinations) =>
      destinations.every((destination) =>
        VALID_DESTINATIONS.includes(destination)
      )
    )
    .withMessage('유효하지 않은 목적지가 포함되어 있습니다.'),
  body('startDate')
    .notEmpty()
    .withMessage('시작일은 필수 입력 항목입니다.')
    .isISO8601()
    .withMessage('유효한 날짜 형식(YYYY-MM-DD)이 아닙니다.'),
  body('endDate')
    .notEmpty()
    .withMessage('종료일은 필수 입력 항목입니다.')
    .isISO8601()
    .withMessage('유효한 날짜 형식(YYYY-MM-DD)이 아닙니다.'),
  body('spotIds')
    .isArray({ min: 1 })
    .withMessage('스팟 ID는 최소 1개 이상 포함된 배열 형태여야 합니다.'),
  body('spotIds.*').isInt().toInt().withMessage('스팟 ID는 정수여야 합니다.'),
];

const createTripValidator = [...createTripValidationRules, validate()];

module.exports = createTripValidator;
