require('./configs/envConfig');

const http = require('http');
const app = require('./app');
const setupSocketIO = require('./configs/socketConfig');

const PORT = process.env.PORT || 8888;

// HTTP 서버 생성
const server = http.createServer(app);

// Socket.IO 설정
const { io, tripDocNS, redisClient } = setupSocketIO(server);

// // 주기적으로 Redis 데이터를 MySQL에 동기화하는 스케줄러 추가
// const syncRedisToMySQL = require('./services/syncRedisToMySQL');
// const SYNC_INTERVAL = process.env.REDIS_SYNC_INTERVAL || 5 * 60 * 1000; // 기본 5분

// // Redis에서 MySQL로 데이터 동기화 스케줄링
// setInterval(syncRedisToMySQL, SYNC_INTERVAL);

// 앱 컨텍스트에 Socket.IO 및 Redis 클라이언트 추가
app.set('io', io);
app.set('tripDocNS', tripDocNS);
app.set('redisClient', redisClient);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Socket.IO server is active`);
});
