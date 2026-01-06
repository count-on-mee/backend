const { DeleteObjectCommand } = require('@aws-sdk/client-s3');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const s3 = require('./S3Client');

// 파일 필터링 함수 (이미지만 허용)
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('이미지 파일만 업로드 가능합니다 (jpeg, jpg, png, gif)'));
  }
};

// 기본 multer S3 설정 생성 함수
const createS3Storage = (directory) => {
  return multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const fileName = `${directory}/${uuidv4()}${ext}`;
      cb(null, fileName);
    },
  });
};

// 프로필 이미지 업로더
const profileUpload = multer({
  storage: createS3Storage('profiles'),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter,
});

// 리뷰 이미지 업로더
const reviewUpload = multer({
  storage: createS3Storage('reviews'),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter,
});

// 스팟 이미지 업로더
const spotUpload = multer({
  storage: createS3Storage('spots'),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter,
});

const deleteFile = async (fileUrl) => {
  try {
    if (!fileUrl) return;

    const key = fileUrl.split('/').slice(3).join('/');

    const deleteCommand = new DeleteObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: key,
    });

    await s3.send(deleteCommand);
    return true;
  } catch (error) {
    console.error('S3 파일 삭제 오류:', error);
    return false;
  }
};

module.exports = {
  profileUpload,
  reviewUpload,
  spotUpload,
  deleteFile,
};
