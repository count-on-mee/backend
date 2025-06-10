const { RedisCacheManager, SocketManager } = require('../utils');

const handleParticipantEvents = (socket) => {
  const { roomId, tripDocumentId } =
    SocketManager.extractTripDocumentInfo(socket);

  socket.on('updateParticipantCount', async ({ participantFields }) => {
    try {
      const updatedData = participantFields.count;

      await RedisCacheManager.updateDocumentWithDirtyFlag(
        tripDocumentId,
        'participant_count',
        updatedData
      );
      socket.to(roomId).emit('participantCountUpdated', { participantFields });
    } catch (error) {
      socket.emit('error', { message: 'Failed to update participant count' });
    }
  });
};

module.exports = handleParticipantEvents;
