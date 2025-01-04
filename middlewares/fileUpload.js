// const fileUpload = require('express-fileupload');

// module.exports = fileUpload({
//   limits: { fileSize: 10 * 1024 * 1024 },
//   abortOnLimit: true,
//   responseOnLimit: 'File size limit has been reached',
// });
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const uploadDir = path.join(process.cwd(), 'uploads');
if(!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, {recursive: true});
}
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); 
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); 
  }
});

const fileUpload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 } 
});

module.exports = fileUpload;