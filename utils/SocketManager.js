class SocketManager {
  static extractTripDocumentInfo(socket) {
    const roomId = Array.from(socket.rooms).find((room) =>
      room.startsWith('tripDocument:')
    );

    if (!roomId) {
      throw new Error('Not joined to any trip document room');
    }

    const tripDocumentId = roomId.split(':')[1];
    return { roomId, tripDocumentId };
  }
}
module.exports = SocketManager;
