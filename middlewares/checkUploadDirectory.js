const fs = require('fs');
const path = require('path');

const directory = path.join(process.cwd(), 'uploads');

function checkUploadDirectory(req, res, next) {
  fs.access(directory, fs.constants.W_OK, (accessErr) => {
    if (accessErr) {
      console.error(`${directory} is not writable or does not exist`);
      
      // 디렉토리 생성 및 권한 설정
      fs.mkdir(directory, { recursive: true }, (mkdirErr) => {
        if (mkdirErr) {
          console.error(`Failed to create directory: ${mkdirErr.message}`);
          return res.status(500).json({ error: 'Failed to prepare upload directory' });
        } else {
          console.log(`Directory created: ${directory}`);
          
          // 생성된 디렉토리에 쓰기 권한 추가
          fs.chmod(directory, 0o755, (chmodErr) => {
            if (chmodErr) {
              console.error(`Failed to set permissions: ${chmodErr.message}`);
              return res.status(500).json({ error: 'Failed to set permissions for upload directory' });
            } else {
              console.log(`Permissions set to writable for: ${directory}`);
              next();
            }
          });
        }
      });
    } else {
      console.log(`${directory} is writable`);
      next();
    }
  });
}

module.exports = checkUploadDirectory;
