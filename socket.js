const { Server } = require('socket.io');
const {
  handleExpenseEvents,
  handleAccommodationEvents,
  handleTaskEvents,
} = require('./socketHandlers');
const { TripDocument } = require('./models');

let io;

exports.initializeSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      methods: ['GET', 'POST'],
      credentials: true,
    },
    path: '/socket.io/',
    transports: ['websocket'],
    pingTimeout: 60000,
    pingInterval: 25000,
  });

  io.on('connection', async (socket) => {
    try {
      const tripId = socket.handshake.query.tripId;
      if (!tripId) {
        throw new Error('Trip ID is required');
      }

      const { tripDocumentId } = await TripDocument.findOne({
        where: { tripId },
        attributes: ['tripDocumentId'],
      });

      if (!tripDocumentId) {
        throw new Error('Trip document not found');
      }

      const roomId = `tripDocument:${tripDocumentId}`;
      await socket.join(roomId);

      handleExpenseEvents(socket);
      handleAccommodationEvents(socket);
      handleTaskEvents(socket);

      socket.on('disconnect', async () => {
        const tripId = socket.handshake.query.tripId;
        if (!tripId) {
          throw new Error('Trip ID is required');
        }

        const { tripDocumentId } = await TripDocument.findOne({
          where: { tripId },
          attributes: ['tripDocumentId'],
        });

        if (!tripDocumentId) {
          throw new Error('Trip document not found');
        }

        const roomId = `tripDocument:${tripDocumentId}`;
        socket.leave(roomId);

        socket.to(roomId).emit('userDisconnected', {
          socketId: socket.id,
          timestamp: new Date(),
        });
      });
    } catch (error) {
      console.error('Error in socket connection:', error);
      socket.emit('error', { message: error.message });
      socket.disconnect();
    }
  });

  return io;
};

exports.getIO = () => {
  if (!io) {
    throw new Error('Socket.io not initialized');
  }
  return io;
};
