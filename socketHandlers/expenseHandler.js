const { TripDocumentExpense, TripDocumentExpenseParticipant } = require('../models');
const { ObjectUtil, RedisCacheManager, SocketManager } = require('../utils');

const handleExpenseEvents = (socket) => {
  const { roomId, tripDocumentId } =
    SocketManager.extractTripDocumentInfo(socket);

  socket.on('addExpense', async ({ expenseData }) => {
    try {
      // 검증: PERSONAL 타입인 경우 payUserId 필수, participants 없거나 빈 배열만 허용
      if (expenseData?.expenseType === 'PERSONAL') {
        if (!expenseData.payUserId) {
          socket.emit('error', {
            message: 'PERSONAL expense type requires payUserId',
          });
          return;
        }
        if (
          expenseData.participants &&
          Array.isArray(expenseData.participants) &&
          expenseData.participants.length > 0
        ) {
          socket.emit('error', {
            message: 'PERSONAL expense type cannot have participants',
          });
          return;
        }
      }

      // 검증: SHARED 타입인 경우 participants의 sharedAmount 합계가 totalAmount와 일치해야 함
      if (expenseData?.expenseType === 'SHARED') {
        if (
          expenseData.participants &&
          Array.isArray(expenseData.participants) &&
          expenseData.participants.length > 0
        ) {
          const totalSharedAmount = expenseData.participants.reduce(
            (sum, p) => sum + (p.sharedAmount || 0),
            0
          );
          if (totalSharedAmount !== expenseData.totalAmount) {
            socket.emit('error', {
              message: `SHARED expense type: participants sharedAmount sum (${totalSharedAmount}) must equal totalAmount (${expenseData.totalAmount})`,
            });
            return;
          }
        }
      }

      const currentData = await RedisCacheManager.getDocument(
        tripDocumentId,
        'expenses'
      );

      const {
        participants,
        payUserId,
        ...expenseFields
      } = expenseData || {};

      const createdExpense = await TripDocumentExpense.create({
        tripDocumentId,
        payUserId,
        ...expenseFields,
      });

      if (Array.isArray(participants) && participants.length > 0) {
        await TripDocumentExpenseParticipant.bulkCreate(
          participants.map((p) => ({
            tripDocumentExpenseId: createdExpense.tripDocumentExpenseId,
            participantUserId: p.participantUserId,
            sharedAmount: p.sharedAmount,
          }))
        );
      }

      const newExpense = ObjectUtil.omit(createdExpense.get({ plain: true }), [
        'tripDocumentId',
        'createdAt',
        'updatedAt',
      ]);

      // 공동 경비인 경우에도 payUserId 키는 항상 포함 (null)
      if (!Object.prototype.hasOwnProperty.call(newExpense, 'payUserId')) {
        newExpense.payUserId = null;
      }

      if (Array.isArray(participants)) {
        newExpense.participants = participants;
      }

      const updatedData = [...currentData, newExpense];
      await RedisCacheManager.setDocument(
        tripDocumentId,
        'expenses',
        updatedData
      );

      // PERSONAL 타입인 경우 emit하지 않음 (다른 사용자에게 보이지 않아야 함)
      // SHARED 타입만 room 전체에 emit
      if (newExpense.expenseType === 'SHARED') {
        socket.to(roomId).emit('expenseAdded', newExpense);
      }
    } catch (error) {
      socket.emit('error', { message: 'Failed to add expense' });
    }
  });

  socket.on(
    'updateExpense',
    async ({ tripDocumentExpenseId, expenseFields }) => {
      try {
        const currentData = await RedisCacheManager.getDocument(
          tripDocumentId,
          'expenses'
        );
        
        const targetExpense = currentData.find(
          (expense) => expense.tripDocumentExpenseId === tripDocumentExpenseId
        );

        if (!targetExpense) {
          socket.emit('error', {
            message: 'Expense not found',
          });
          return;
        }

        // 업데이트 후 최종 상태 확인
        const finalExpenseType =
          expenseFields.expenseType ?? targetExpense.expenseType;
        const finalPayUserId =
          expenseFields.payUserId !== undefined
            ? expenseFields.payUserId
            : targetExpense.payUserId;
        const finalParticipants =
          expenseFields.participants !== undefined
            ? expenseFields.participants
            : targetExpense.participants;
        const finalTotalAmount =
          expenseFields.totalAmount !== undefined
            ? expenseFields.totalAmount
            : targetExpense.totalAmount;

        // 검증: PERSONAL 타입인 경우 payUserId 필수, participants 없거나 빈 배열만 허용
        if (finalExpenseType === 'PERSONAL') {
          if (!finalPayUserId) {
            socket.emit('error', {
              message: 'PERSONAL expense type requires payUserId',
            });
            return;
          }
          if (
            finalParticipants &&
            Array.isArray(finalParticipants) &&
            finalParticipants.length > 0
          ) {
            socket.emit('error', {
              message: 'PERSONAL expense type cannot have participants',
            });
            return;
          }
        }

        // 검증: SHARED 타입인 경우 participants의 sharedAmount 합계가 totalAmount와 일치해야 함
        if (finalExpenseType === 'SHARED') {
          if (
            finalParticipants &&
            Array.isArray(finalParticipants) &&
            finalParticipants.length > 0
          ) {
            const totalSharedAmount = finalParticipants.reduce(
              (sum, p) => sum + (p.sharedAmount || 0),
              0
            );
            if (totalSharedAmount !== finalTotalAmount) {
              socket.emit('error', {
                message: `SHARED expense type: participants sharedAmount sum (${totalSharedAmount}) must equal totalAmount (${finalTotalAmount})`,
              });
              return;
            }
          }
        }

        const updatedData = currentData.map((expense) =>
          expense.tripDocumentExpenseId === tripDocumentExpenseId
            ? { ...expense, ...expenseFields }
            : expense
        );
        await RedisCacheManager.updateDocumentWithDirtyFlag(
          tripDocumentId,
          'expenses',
          updatedData
        );

        // PERSONAL 타입인 경우 emit하지 않음 (다른 사용자에게 보이지 않아야 함)
        // SHARED 타입만 room 전체에 emit
        if (finalExpenseType === 'SHARED') {
          socket.to(roomId).emit('expenseUpdated', {
            tripDocumentExpenseId,
            expenseFields,
          });
        }
      } catch (error) {
        socket.emit('error', { message: 'Failed to update expense' });
      }
    }
  );

  socket.on('deleteExpense', async ({ tripDocumentExpenseId }) => {
    try {
      const currentData = await RedisCacheManager.getDocument(
        tripDocumentId,
        'expenses'
      );
      
      const targetExpense = currentData.find(
        (expense) => expense.tripDocumentExpenseId === tripDocumentExpenseId
      );
      
      const updatedData = currentData.filter(
        (expense) => expense.tripDocumentExpenseId !== tripDocumentExpenseId
      );
      await RedisCacheManager.updateDocumentWithDirtyFlag(
        tripDocumentId,
        'expenses',
        updatedData
      );

      await RedisCacheManager.addDeletedId(
        tripDocumentId,
        'expenses',
        tripDocumentExpenseId
      );

      // PERSONAL 타입인 경우 emit하지 않음 (다른 사용자에게 보이지 않아야 함)
      // SHARED 타입만 room 전체에 emit
      if (targetExpense?.expenseType === 'SHARED') {
        socket.to(roomId).emit('expenseDeleted', { tripDocumentExpenseId });
      }
    } catch (error) {
      socket.emit('error', { message: 'Failed to delete expense' });
    }
  });
};

module.exports = handleExpenseEvents;
