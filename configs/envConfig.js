const path = require('path');

// 지원하는 환경 목록
const ENVIRONMENTS = {
  DEVELOPMENT: 'development',
  TEST: 'test',
  PRODUCTION: 'production',
};

const getEnvPath = (env) => {
  switch (env) {
    case ENVIRONMENTS.TEST:
      return '.env.test';
    case ENVIRONMENTS.PRODUCTION:
      return '.env.production';
    case ENVIRONMENTS.DEVELOPMENT:
    default:
      return '.env.development';
  }
};

const loadEnv = () => {
  const env = process.env.NODE_ENV || ENVIRONMENTS.DEVELOPMENT;

  if (!Object.values(ENVIRONMENTS).includes(env)) {
    console.warn(
      `경고: 알 수 없는 환경입니다 - "${env}". 개발 환경으로 진행합니다.`
    );
  }

  const envPath = getEnvPath(env);
  const envFilePath = path.resolve(__dirname, '..', envPath);

  try {
    require('dotenv').config({
      path: envFilePath,
    });

    // 필수 환경 변수 검증
    const requiredEnvVars = [
      'DB_USERNAME',
      'DB_PASSWORD',
      'DB_NAME',
      'DB_HOST',
      'DB_PORT',
      'JWT_ACCESS_SECRET',
      'JWT_REFRESH_SECRET',
    ];

    const missingEnvVars = requiredEnvVars.filter(
      (envVar) => !process.env[envVar]
    );

    if (missingEnvVars.length > 0) {
      throw new Error(
        `필수 환경 변수가 누락되었습니다: ${missingEnvVars.join(', ')}`
      );
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`오류: 환경 설정 파일을 찾을 수 없습니다 - ${envPath}`);
    } else {
      console.error('환경 설정 로드 중 오류 발생:', error.message);
    }
    process.exit(1);
  }
};

// 애플리케이션 시작 시 환경 변수 로드
loadEnv();

module.exports = {
  ENV: ENVIRONMENTS,
  loadEnv,
  isDevelopment: process.env.NODE_ENV === ENVIRONMENTS.DEVELOPMENT,
  isTest: process.env.NODE_ENV === ENVIRONMENTS.TEST,
  isProduction: process.env.NODE_ENV === ENVIRONMENTS.PRODUCTION,
};
