// filepath: /Users/insoo/Git/count-on-me/backend/services/syncRedisToMySQL.js
const createRedisClient = require('../configs/redisConfig');
const models = require('../models');

// Redis 클라이언트 생성
const redisClient = createRedisClient();

/**
 * Redis에 저장된 여행 문서 데이터를 MySQL에 동기화하는 함수
 */
const syncRedisToMySQL = async () => {
  try {
    console.log('Redis에서 MySQL로 데이터 동기화 시작...');

    // 1. 비용 항목 동기화
    const expenseKeys = await redisClient.keys('trip:*:expenses:*');
    for (const key of expenseKeys) {
      try {
        // Redis에서 비용 데이터 가져오기
        const expenseData = await redisClient.hgetall(key);

        if (expenseData && expenseData.data) {
          const expense = JSON.parse(expenseData.data);
          const keyParts = key.split(':');
          const tripId = keyParts[1];
          const expenseId = keyParts[3];

          // 데이터베이스에 비용 항목 업데이트 또는 생성
          await models.tripDocumentExpense.upsert({
            id: expenseId,
            tripDocumentId: expense.tripDocumentId,
            item: expense.item,
            amount: expense.amount,
            note: expense.note,
            userId: expense.userId,
            updatedAt: new Date(),
          });

          console.log(`비용 항목 동기화 완료: ${key}`);
        }
      } catch (error) {
        console.error(`비용 항목 동기화 실패: ${key}`, error);
      }
    }

    // 2. 스팟 후보 동기화
    const spotKeys = await redisClient.keys('trip:*:spots:*');
    for (const key of spotKeys) {
      try {
        const spotData = await redisClient.hgetall(key);

        if (spotData && spotData.data) {
          const spot = JSON.parse(spotData.data);
          const keyParts = key.split(':');
          const tripId = keyParts[1];
          const spotId = keyParts[3];

          await models.tripDocumentSpotCandidate.upsert({
            id: spotId,
            tripDocumentId: spot.tripDocumentId,
            name: spot.name,
            description: spot.description,
            address: spot.address,
            latitude: spot.latitude,
            longitude: spot.longitude,
            category: spot.category,
            userId: spot.userId,
            updatedAt: new Date(),
          });

          console.log(`스팟 후보 동기화 완료: ${key}`);
        }
      } catch (error) {
        console.error(`스팟 후보 동기화 실패: ${key}`, error);
      }
    }

    // 3. 스팟 댓글 동기화
    const commentKeys = await redisClient.keys('trip:*:spot:*:comments:*');
    for (const key of commentKeys) {
      try {
        const commentData = await redisClient.hgetall(key);

        if (commentData && commentData.data) {
          const comment = JSON.parse(commentData.data);
          const keyParts = key.split(':');
          const tripId = keyParts[1];
          const spotId = keyParts[3];
          const commentId = keyParts[5];

          await models.tripDocumentSpotCandidateComment.upsert({
            id: commentId,
            tripDocumentSpotCandidateId: spotId,
            content: comment.content,
            userId: comment.userId,
            updatedAt: new Date(),
          });

          console.log(`스팟 댓글 동기화 완료: ${key}`);
        }
      } catch (error) {
        console.error(`스팟 댓글 동기화 실패: ${key}`, error);
      }
    }

    // 4. 할 일 동기화
    const taskKeys = await redisClient.keys('trip:*:tasks:*');
    for (const key of taskKeys) {
      try {
        const taskData = await redisClient.hgetall(key);

        if (taskData && taskData.data) {
          const task = JSON.parse(taskData.data);
          const keyParts = key.split(':');
          const tripId = keyParts[1];
          const taskId = keyParts[3];

          await models.tripDocumentTask.upsert({
            id: taskId,
            tripDocumentId: task.tripDocumentId,
            title: task.title,
            description: task.description,
            status: task.status,
            dueDate: task.dueDate ? new Date(task.dueDate) : null,
            assigneeId: task.assigneeId,
            userId: task.userId,
            updatedAt: new Date(),
          });

          console.log(`할 일 동기화 완료: ${key}`);
        }
      } catch (error) {
        console.error(`할 일 동기화 실패: ${key}`, error);
      }
    }

    console.log('Redis에서 MySQL로 데이터 동기화 완료');
  } catch (error) {
    console.error('Redis에서 MySQL로 데이터 동기화 중 오류 발생:', error);
  }
};

module.exports = syncRedisToMySQL;
