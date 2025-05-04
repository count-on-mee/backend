const socketIO = require('socket.io');
const createRedisClient = require('./redisConfig');

// Redis 클라이언트 생성
const redisClient = createRedisClient();

/**
 * Socket.IO 서버 설정
 * @param {object} server - HTTP 서버 인스턴스
 * @return {object} 설정된 Socket.IO 인스턴스
 */
const setupSocketIO = (server) => {
  // Socket.IO 서버 생성
  const io = socketIO(server, {
    cors: {
      origin: process.env.CLIENT_URL || '*', // 프론트엔드 도메인
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });

  // 기본 네임스페이스 연결
  io.on('connection', (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    // 연결된 클라이언트의 tripId 파악
    const tripId = socket.handshake.query.tripId;

    if (tripId) {
      // 여행 ID 기반으로 룸 조인
      socket.join(`trip:${tripId}`);
      console.log(`Socket ${socket.id} joined room trip:${tripId}`);
    }

    // 클라이언트 연결 해제 시
    socket.on('disconnect', () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });

    // 에러 처리
    socket.on('error', (error) => {
      console.error(`Socket error: ${error}`);
    });
  });

  // 여행 문서 네임스페이스 설정
  const tripDocNS = io.of('/trip-documents');

  tripDocNS.on('connection', (socket) => {
    console.log(`Socket connected to trip-documents: ${socket.id}`);

    const tripId = socket.handshake.query.tripId;

    if (tripId) {
      socket.join(`trip:${tripId}`);

      // 1. 비용 템플릿 관련 이벤트
      socket.on('updateExpense', async (data) => {
        try {
          // Redis에 데이터 저장 (해시 구조 사용)
          const expenseKey = `trip:${tripId}:expenses:${data.id}`;
          await redisClient.hset(expenseKey, 'data', JSON.stringify(data));
          await redisClient.expire(expenseKey, 60 * 60 * 24); // 24시간 유효

          // 같은 방에 있는 모든 클라이언트에게 이벤트 전송
          socket.to(`trip:${tripId}`).emit('expenseUpdated', data);

          console.log(`Expense updated for trip ${tripId}:`, data);
        } catch (error) {
          console.error('Error updating expense:', error);
          socket.emit('error', {
            message: '비용 업데이트 중 오류가 발생했습니다.',
          });
        }
      });

      socket.on('createExpense', async (data) => {
        try {
          // 새 비용 항목을 Redis에 저장
          const expenseKey = `trip:${tripId}:expenses:${data.id}`;
          await redisClient.hset(expenseKey, 'data', JSON.stringify(data));
          await redisClient.expire(expenseKey, 60 * 60 * 24);

          // 모든 클라이언트에게 새 비용 항목 알림
          tripDocNS.to(`trip:${tripId}`).emit('expenseCreated', data);

          console.log(`New expense created for trip ${tripId}:`, data);
        } catch (error) {
          console.error('Error creating expense:', error);
          socket.emit('error', {
            message: '비용 생성 중 오류가 발생했습니다.',
          });
        }
      });

      socket.on('deleteExpense', async (data) => {
        try {
          // Redis에서 해당 항목 삭제
          const expenseKey = `trip:${tripId}:expenses:${data.id}`;
          await redisClient.del(expenseKey);

          // 모든 클라이언트에게 삭제 알림
          tripDocNS.to(`trip:${tripId}`).emit('expenseDeleted', data);

          console.log(`Expense deleted for trip ${tripId}:`, data);
        } catch (error) {
          console.error('Error deleting expense:', error);
          socket.emit('error', {
            message: '비용 삭제 중 오류가 발생했습니다.',
          });
        }
      });

      // 2. 스팟 후보 템플릿 관련 이벤트
      socket.on('updateSpotCandidate', async (data) => {
        try {
          const spotKey = `trip:${tripId}:spots:${data.id}`;
          await redisClient.hset(spotKey, 'data', JSON.stringify(data));
          await redisClient.expire(spotKey, 60 * 60 * 24);

          tripDocNS.to(`trip:${tripId}`).emit('spotCandidateUpdated', data);
        } catch (error) {
          console.error('Error updating spot candidate:', error);
          socket.emit('error', {
            message: '장소 후보 업데이트 중 오류가 발생했습니다.',
          });
        }
      });

      // 3. 스팟 댓글 관련 이벤트
      socket.on('addSpotComment', async (data) => {
        try {
          const commentKey = `trip:${tripId}:spot:${data.spotId}:comments:${data.id}`;
          await redisClient.hset(commentKey, 'data', JSON.stringify(data));
          await redisClient.expire(commentKey, 60 * 60 * 24);

          tripDocNS.to(`trip:${tripId}`).emit('spotCommentAdded', data);
        } catch (error) {
          console.error('Error adding spot comment:', error);
          socket.emit('error', {
            message: '장소 댓글 추가 중 오류가 발생했습니다.',
          });
        }
      });

      // 4. 할 일 템플릿 관련 이벤트
      socket.on('updateTask', async (data) => {
        try {
          const taskKey = `trip:${tripId}:tasks:${data.id}`;
          await redisClient.hset(taskKey, 'data', JSON.stringify(data));
          await redisClient.expire(taskKey, 60 * 60 * 24);

          tripDocNS.to(`trip:${tripId}`).emit('taskUpdated', data);
        } catch (error) {
          console.error('Error updating task:', error);
          socket.emit('error', {
            message: '할 일 업데이트 중 오류가 발생했습니다.',
          });
        }
      });
    }

    socket.on('disconnect', () => {
      console.log(`Socket disconnected from trip-documents: ${socket.id}`);
    });
  });

  return {
    io,
    tripDocNS,
    // Redis 클라이언트 추가
    redisClient,
  };
};

module.exports = setupSocketIO;
