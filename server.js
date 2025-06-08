require('./configs/envConfig');
require('./configs/redisConfig');

const app = require('./app');
const http = require('http');
const { initializeSocket } = require('./socket');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 8888;

const server = http.createServer(app);
const io = initializeSocket(server);

const logServerStatus = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ MySQL connected successfully');

    if (io) {
      console.log('✅ WebSocket server initialized');
    }
  } catch (error) {
    console.error('❌ Server component error:', error);
  }
};

server.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);
  await logServerStatus();
});
