const { TripDocumentTask } = require('../models');
const { ObjectUtil, RedisCacheManager, SocketManager } = require('../utils');

const handleTaskEvents = (socket) => {
  const { roomId, tripDocumentId } =
    SocketManager.extractTripDocumentInfo(socket);

  socket.on('addTask', async ({ taskData }) => {
    try {
      const currentData = await RedisCacheManager.getDocument(
        tripDocumentId,
        'tasks'
      );

      const createdTask = await TripDocumentTask.create({
        tripDocumentId,
        ...taskData,
      });

      const newTask = ObjectUtil.omit(createdTask.get({ plain: true }), [
        'tripDocumentId',
        'createdAt',
        'updatedAt',
      ]);

      const updatedData = [...currentData, newTask];
      await RedisCacheManager.setDocument(tripDocumentId, 'tasks', updatedData);

      socket.to(roomId).emit('taskAdded', newTask);
    } catch (error) {
      socket.emit('error', { message: 'Failed to add task' });
    }
  });

  socket.on('updateTask', async ({ tripDocumentTaskId, taskFields }) => {
    try {
      const currentData = await RedisCacheManager.getDocument(
        tripDocumentId,
        'tasks'
      );
      const updatedData = currentData.map((task) =>
        task.tripDocumentTaskId === tripDocumentTaskId
          ? { ...task, ...taskFields }
          : task
      );
      await RedisCacheManager.updateDocumentWithDirtyFlag(
        tripDocumentId,
        'tasks',
        updatedData
      );

      socket.to(roomId).emit('taskUpdated', {
        tripDocumentTaskId,
        taskFields,
      });
    } catch (error) {
      socket.emit('error', { message: 'Failed to update task' });
    }
  });

  socket.on('deleteTask', async ({ tripDocumentTaskId }) => {
    try {
      const currentData = await RedisCacheManager.getDocument(
        tripDocumentId,
        'tasks'
      );
      const updatedData = currentData.filter(
        (task) => task.tripDocumentTaskId !== tripDocumentTaskId
      );
      await RedisCacheManager.updateDocumentWithDirtyFlag(
        tripDocumentId,
        'tasks',
        updatedData
      );

      await RedisCacheManager.addDeletedId(
        tripDocumentId,
        'tasks',
        tripDocumentTaskId
      );

      socket.to(roomId).emit('taskDeleted', { tripDocumentTaskId });
    } catch (error) {
      socket.emit('error', { message: 'Failed to delete task' });
    }
  });
};

module.exports = handleTaskEvents;
