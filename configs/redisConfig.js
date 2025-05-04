// filepath: /Users/insoo/Git/count-on-me/backend/configs/redisConfig.js
const redis = require('redis');
const { promisify } = require('util');

// Redis 클라이언트 생성
const createRedisClient = () => {
  try {
    // Redis 연결 설정 (환경 변수에서 가져오거나 기본값 사용)
    const redisClient = redis.createClient({
      host: process.env.REDIS_HOST || 'localhost',
      port: process.env.REDIS_PORT || 6379,
      password: process.env.REDIS_PASSWORD || '',
      // 필요한 경우 추가 옵션 설정
      retry_strategy: (options) => {
        // 재연결 전략
        if (options.error && options.error.code === 'ECONNREFUSED') {
          // Redis 서버가 실행되지 않는 경우
          console.error('Redis 서버에 연결할 수 없습니다.');
          return new Error('Redis 서버에 연결할 수 없습니다.');
        }
        if (options.total_retry_time > 1000 * 60 * 60) {
          // 1시간 이상 재시도 후에도 연결 실패
          return new Error('Redis 연결 재시도 시간이 초과되었습니다.');
        }
        if (options.attempt > 10) {
          // 10번 이상 재시도 실패
          return undefined;
        }
        // 지수 백오프 전략으로 재연결 시도
        return Math.min(options.attempt * 100, 3000);
      },
    });

    // Redis 이벤트 리스너
    redisClient.on('error', (err) => {
      console.error('Redis 클라이언트 오류:', err);
    });

    redisClient.on('ready', () => {
      console.log('Redis가 성공적으로 연결되었습니다.');
    });

    redisClient.on('reconnecting', () => {
      console.log('Redis에 재연결 중...');
    });

    // Redis 커맨드를 안전하게 프로미스화
    // redis 메서드에 직접 접근하는 대신 함수 존재 여부를 확인
    const promisifyIfExists = (fn) => {
      return fn && typeof fn === 'function'
        ? promisify(fn).bind(redisClient)
        : async () => {
            console.error('해당 Redis 메서드를 찾을 수 없습니다');
            return null;
          };
    };

    return {
      client: redisClient,
      // 문자열 관련 메소드
      get: promisifyIfExists(redisClient.get),
      set: promisifyIfExists(redisClient.set),
      del: promisifyIfExists(redisClient.del),
      expire: promisifyIfExists(redisClient.expire),
      keys: promisifyIfExists(redisClient.keys),
      // 해시 관련 메소드
      hget: promisifyIfExists(redisClient.hget),
      hset: promisifyIfExists(redisClient.hset),
      hgetall: promisifyIfExists(redisClient.hgetall),
      hdel: promisifyIfExists(redisClient.hdel),
      // 기타 필요한 메소드들
      flushall: promisifyIfExists(redisClient.flushall),
    };
  } catch (error) {
    console.error('Redis 클라이언트 생성 중 오류 발생:', error);
    throw error;
  }
};

module.exports = createRedisClient;
