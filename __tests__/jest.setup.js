const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '../.env.test'),
});

// 기본 테스트 타임아웃 설정 (10초)
jest.setTimeout(10000);
