const updateUserValidator = require('../../../validators/users/updateUserValidator');
const { validationResult } = require('express-validator');
const httpMocks = require('node-mocks-http');

jest.mock('express-validator', () => {
  const originalModule = jest.requireActual('express-validator');

  return {
    ...originalModule,
    validationResult: jest.fn(),
    body: jest.fn().mockImplementation(() => ({
      optional: jest.fn().mockReturnThis(),
      isLength: jest.fn().mockReturnThis(),
      withMessage: jest.fn().mockReturnThis(),
      matches: jest.fn().mockReturnThis(),
    })),
  };
});

describe('userValidator 유닛 테스트', () => {
  let req, res, next;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();

    // validationResult 모의 초기화
    validationResult.mockReturnValue({ isEmpty: () => true, array: () => [] });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('updateUserValidator', () => {
    it('닉네임이 제공되면 검증을 통과하고 next()를 호출한다', () => {
      // Arrange
      req.body.nickname = '테스트닉네임';

      // Act
      updateUserValidator.forEach((middleware) => {
        if (typeof middleware === 'function') {
          middleware(req, res, next);
        }
      });

      // Assert
      expect(next).toHaveBeenCalled();
    });

    it('프로필 이미지가 제공되면 검증을 통과하고 next()를 호출한다', () => {
      // Arrange
      req.file = { location: 'https://example.com/image.jpg' };

      // Act
      updateUserValidator.forEach((middleware) => {
        if (typeof middleware === 'function') {
          middleware(req, res, next);
        }
      });

      // Assert
      expect(next).toHaveBeenCalled();
    });

    it('닉네임과 프로필 이미지 모두 제공되면 검증을 통과하고 next()를 호출한다', () => {
      // Arrange
      req.body.nickname = '테스트닉네임';
      req.file = { location: 'https://example.com/image.jpg' };

      // Act
      updateUserValidator.forEach((middleware) => {
        if (typeof middleware === 'function') {
          middleware(req, res, next);
        }
      });

      // Assert
      expect(next).toHaveBeenCalled();
    });

    it('닉네임과 프로필 이미지 모두 제공되지 않으면 400 에러를 반환한다', () => {
      // Arrange - req는 기본적으로 빈 객체

      // Act
      updateUserValidator.forEach((middleware) => {
        if (typeof middleware === 'function') {
          middleware(req, res, next);
        }
      });

      // Assert
      expect(res.statusCode).toBe(400);
      expect(JSON.parse(res._getData())).toEqual(
        expect.objectContaining({
          message: expect.stringContaining('업데이트할 정보가 없습니다'),
        })
      );
      expect(next).not.toHaveBeenCalled();
    });

    it('입력값이 유효하지 않으면 400 에러를 반환한다', () => {
      // Arrange
      req.body.nickname = '#';

      // 유효성 검사 실패 모의
      validationResult.mockReturnValue({
        isEmpty: () => false,
        array: () => [
          {
            msg: '닉네임은 2자 이상 30자 이하이어야 합니다.',
          },
          {
            msg: '닉네임에는 알파벳, 숫자, 한글, 공백, 하이픈(-), 언더스코어(_)만 사용할 수 있습니다.',
          },
        ],
      });

      // Act
      updateUserValidator.forEach((middleware) => {
        if (typeof middleware === 'function') {
          middleware(req, res, next);
        }
      });

      // Assert
      expect(res.statusCode).toBe(400);
      expect(JSON.parse(res._getData())).toEqual(
        expect.objectContaining({
          message: '입력값이 유효하지 않습니다.',
          errors: expect.arrayContaining([
            '닉네임은 2자 이상 30자 이하이어야 합니다.',
            '닉네임에는 알파벳, 숫자, 한글, 공백, 하이픈(-), 언더스코어(_)만 사용할 수 있습니다.',
          ]),
        })
      );
      expect(next).not.toHaveBeenCalled();
    });
  });
});
