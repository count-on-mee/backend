const fileUpload = require('express-fileupload');

module.exports = fileUpload({
  limits: { fileSize: 10 * 1024 * 1024 },
  abortOnLimit: true,
  responseOnLimit: 'File size limit has been reached',
});
