// filepath: /Users/insoo/Git/count-on-me/backend/controllers/tripDocumentController.js
const models = require('../models');
const { Op } = require('sequelize');

/**
 * 여행 문서 데이터를 가져오는 컨트롤러
 * Redis 캐시를 먼저 확인하고, 없으면 DB에서 조회 후 Redis에 저장
 */
exports.getTripDocument = async (req, res, next) => {
  try {
    const { tripId } = req.params;
    const redisClient = req.app.get('redisClient');

    // Redis 키 패턴
    const expensesPattern = `trip:${tripId}:expenses:*`;
    const spotsPattern = `trip:${tripId}:spots:*`;
    const tasksPattern = `trip:${tripId}:tasks:*`;

    // 먼저 Redis에서 캐싱된 데이터가 있는지 확인
    const expenseKeys = await redisClient.keys(expensesPattern);
    const spotKeys = await redisClient.keys(spotsPattern);
    const taskKeys = await redisClient.keys(tasksPattern);

    let expenses = [];
    let spots = [];
    let tasks = [];

    // Redis에 캐싱된 데이터가 있는 경우
    if (expenseKeys.length > 0 || spotKeys.length > 0 || taskKeys.length > 0) {
      console.log(`Redis에서 여행 문서 데이터 로드 중: ${tripId}`);

      // 비용 항목 데이터 로드
      for (const key of expenseKeys) {
        const expenseData = await redisClient.hgetall(key);
        if (expenseData && expenseData.data) {
          expenses.push(JSON.parse(expenseData.data));
        }
      }

      // 스팟 후보 데이터 로드
      for (const key of spotKeys) {
        const spotData = await redisClient.hgetall(key);
        if (spotData && spotData.data) {
          const spotInfo = JSON.parse(spotData.data);

          // 해당 스팟의 댓글 로드
          const commentKeys = await redisClient.keys(
            `trip:${tripId}:spot:${spotInfo.id}:comments:*`
          );
          const comments = [];

          for (const commentKey of commentKeys) {
            const commentData = await redisClient.hgetall(commentKey);
            if (commentData && commentData.data) {
              comments.push(JSON.parse(commentData.data));
            }
          }

          spotInfo.comments = comments;
          spots.push(spotInfo);
        }
      }

      // 할 일 데이터 로드
      for (const key of taskKeys) {
        const taskData = await redisClient.hgetall(key);
        if (taskData && taskData.data) {
          tasks.push(JSON.parse(taskData.data));
        }
      }
    } else {
      console.log(`DB에서 여행 문서 데이터 로드 중: ${tripId}`);

      // Redis에 캐싱된 데이터가 없는 경우 DB에서 조회
      const [tripDocument, tripExpenses, tripSpots, tripTasks] =
        await Promise.all([
          // 여행 문서 정보 조회
          models.tripDocument.findOne({
            where: { tripId },
          }),

          // 비용 항목 조회
          models.tripDocumentExpense.findAll({
            where: {
              tripDocumentId: { [Op.col]: 'tripDocument.id' },
            },
            include: [
              {
                model: models.tripDocument,
                where: { tripId },
              },
            ],
          }),

          // 스팟 후보 조회 (댓글 포함)
          models.tripDocumentSpotCandidate.findAll({
            where: {
              tripDocumentId: { [Op.col]: 'tripDocument.id' },
            },
            include: [
              {
                model: models.tripDocument,
                where: { tripId },
              },
              {
                model: models.tripDocumentSpotCandidateComment,
                as: 'comments',
              },
            ],
          }),

          // 할 일 조회
          models.tripDocumentTask.findAll({
            where: {
              tripDocumentId: { [Op.col]: 'tripDocument.id' },
            },
            include: [
              {
                model: models.tripDocument,
                where: { tripId },
              },
            ],
          }),
        ]);

      if (!tripDocument) {
        return res.status(404).json({
          message: '여행 문서를 찾을 수 없습니다.',
        });
      }

      // DB 결과를 Redis에 캐싱

      // 비용 항목 캐싱
      for (const expense of tripExpenses) {
        const expenseData = expense.get({ plain: true });
        const expenseKey = `trip:${tripId}:expenses:${expense.id}`;
        await redisClient.hset(expenseKey, 'data', JSON.stringify(expenseData));
        await redisClient.expire(expenseKey, 60 * 60 * 24); // 24시간 유효
        expenses.push(expenseData);
      }

      // 스팟 후보 캐싱 (댓글 포함)
      for (const spot of tripSpots) {
        const spotData = spot.get({ plain: true });
        const spotKey = `trip:${tripId}:spots:${spot.id}`;

        // 댓글 정보 분리하여 개별적으로 캐싱
        const comments = spotData.comments || [];
        delete spotData.comments;

        await redisClient.hset(spotKey, 'data', JSON.stringify(spotData));
        await redisClient.expire(spotKey, 60 * 60 * 24);

        // 댓글 캐싱
        for (const comment of comments) {
          const commentKey = `trip:${tripId}:spot:${spot.id}:comments:${comment.id}`;
          await redisClient.hset(commentKey, 'data', JSON.stringify(comment));
          await redisClient.expire(commentKey, 60 * 60 * 24);
        }

        // 응답용 데이터에 댓글 추가
        spotData.comments = comments;
        spots.push(spotData);
      }

      // 할 일 캐싱
      for (const task of tripTasks) {
        const taskData = task.get({ plain: true });
        const taskKey = `trip:${tripId}:tasks:${task.id}`;
        await redisClient.hset(taskKey, 'data', JSON.stringify(taskData));
        await redisClient.expire(taskKey, 60 * 60 * 24);
        tasks.push(taskData);
      }
    }

    // 응답 데이터 구성
    const responseData = {
      tripId,
      expenses,
      spots,
      tasks,
    };

    res.status(200).json(responseData);
  } catch (error) {
    console.error('여행 문서 조회 중 오류 발생:', error);
    next(error);
  }
};

/**
 * 새로운 여행 문서 생성
 */
exports.createTripDocument = async (req, res, next) => {
  try {
    const { tripId } = req.params;

    // 이미 존재하는지 확인
    const existingDoc = await models.tripDocument.findOne({
      where: { tripId },
    });

    if (existingDoc) {
      return res.status(409).json({
        message: '이미 여행 문서가 존재합니다.',
      });
    }

    // 여행 문서 생성
    const tripDocument = await models.tripDocument.create({
      tripId,
      userId: req.user.id, // 요청한 사용자를 문서 생성자로 설정
    });

    res.status(201).json(tripDocument);
  } catch (error) {
    console.error('여행 문서 생성 중 오류 발생:', error);
    next(error);
  }
};

module.exports = exports;
