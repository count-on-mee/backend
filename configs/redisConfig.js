const Redis = require('ioredis');
const RedisCacheManager = require('../utils/RedisCacheManager');

const redisConfig = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
  retryStrategy: (times) => {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
  maxRetriesPerRequest: 3,
  enableReadyCheck: true,
};

const redis = new Redis(redisConfig);
redis.on('connect', () => {
  console.log('✅ Redis connected successfully');
});
redis.on('error', (err) => {
  console.error('Redis connection error:', err);
});

// RedisCacheManager에 Redis 클라이언트 설정
RedisCacheManager.setRedisClient(redis);

// Persistence Worker 시작
RedisCacheManager.startPersistenceWorker();

module.exports = redis;
