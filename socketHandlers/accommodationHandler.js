const { TripDocumentAccommodation } = require('../models');
const { ObjectUtil, RedisCacheManager, SocketManager } = require('../utils');

const handleAccommodationEvents = (socket) => {
  const { roomId, tripDocumentId } =
    SocketManager.extractTripDocumentInfo(socket);

  socket.on('addAccommodation', async ({ accommodationData }) => {
    try {
      const currentData = await RedisCacheManager.getDocument(
        tripDocumentId,
        'accommodations'
      );

      const createdAccommodation = await TripDocumentAccommodation.create({
        tripDocumentId,
        ...accommodationData,
      });

      const newAccommodation = ObjectUtil.omit(
        createdAccommodation.get({ plain: true }),
        ['tripDocumentId', 'createdAt', 'updatedAt'],
        ['memo']
      );

      const updatedData = [...currentData, newAccommodation];
      await RedisCacheManager.setDocument(
        tripDocumentId,
        'accommodations',
        updatedData
      );

      socket.to(roomId).emit('accommodationAdded', newAccommodation);
    } catch (error) {
      socket.emit('error', { message: error.message });
    }
  });

  socket.on(
    'updateAccommodation',
    async ({ tripDocumentAccommodationId, accommodationFields }) => {
      try {
        const currentData = await RedisCacheManager.getDocument(
          tripDocumentId,
          'accommodations'
        );
        const updatedData = currentData.map((accommodation) =>
          accommodation.tripDocumentAccommodationId ===
          tripDocumentAccommodationId
            ? { ...accommodation, ...accommodationFields }
            : accommodation
        );
        await RedisCacheManager.updateDocumentWithDirtyFlag(
          tripDocumentId,
          'accommodations',
          updatedData
        );

        socket.to(roomId).emit('accommodationUpdated', {
          tripDocumentAccommodationId,
          accommodationFields,
        });
      } catch (error) {
        socket.emit('error', { message: 'Failed to update accommodation' });
      }
    }
  );

  socket.on('deleteAccommodation', async ({ tripDocumentAccommodationId }) => {
    try {
      const currentData = await RedisCacheManager.getDocument(
        tripDocumentId,
        'accommodations'
      );
      const updatedData = currentData.filter(
        (accommodation) =>
          accommodation.tripDocumentAccommodationId !==
          tripDocumentAccommodationId
      );
      await RedisCacheManager.updateDocumentWithDirtyFlag(
        tripDocumentId,
        'accommodations',
        updatedData
      );

      await RedisCacheManager.addDeletedId(
        tripDocumentId,
        'accommodations',
        tripDocumentAccommodationId
      );

      socket
        .to(roomId)
        .emit('accommodationDeleted', { tripDocumentAccommodationId });
    } catch (error) {
      socket.emit('error', { message: 'Failed to delete accommodation' });
    }
  });
};

module.exports = handleAccommodationEvents;
