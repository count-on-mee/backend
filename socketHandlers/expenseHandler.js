const { TripDocumentExpense } = require('../models');
const { ObjectUtil, RedisCacheManager, SocketManager } = require('../utils');

const handleExpenseEvents = (socket) => {
  const { roomId, tripDocumentId } =
    SocketManager.extractTripDocumentInfo(socket);

  socket.on('addExpense', async ({ expenseData }) => {
    try {
      const currentData = await RedisCacheManager.getDocument(
        tripDocumentId,
        'expenses'
      );

      const createdExpense = await TripDocumentExpense.create({
        tripDocumentId,
        ...expenseData,
      });

      const newExpense = ObjectUtil.omit(createdExpense.get({ plain: true }), [
        'tripDocumentId',
        'createdAt',
        'updatedAt',
      ]);

      const updatedData = [...currentData, newExpense];
      await RedisCacheManager.setDocument(
        tripDocumentId,
        'expenses',
        updatedData
      );

      socket.to(roomId).emit('expenseAdded', newExpense);
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

        socket.to(roomId).emit('expenseUpdated', {
          tripDocumentExpenseId,
          expenseFields,
        });
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

      socket.to(roomId).emit('expenseDeleted', { tripDocumentExpenseId });
    } catch (error) {
      socket.emit('error', { message: 'Failed to delete expense' });
    }
  });
};

module.exports = handleExpenseEvents;
