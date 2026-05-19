class SocketManager {
  static extractTripDocumentInfo(socket) {
    const roomId = Array.from(socket.rooms).find((room) =>
      room.startsWith('tripDocumentVersion:')
    );

    if (!roomId) {
      throw new Error('Not joined to any trip document room');
    }

    const tripDocumentVersionId = roomId.split(':')[1];
    return { roomId, tripDocumentVersionId };
  }
}
module.exports = SocketManager;
