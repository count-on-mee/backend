const express = require('express');
const auth = require('../middlewares/auth');

const router = express.Router();
const supportController = require('../controllers/supportController');

router.get('/notices', supportController.getNotices);
router.get('/notices/:noticeId', supportController.getNoticeById);
router.get('/faqs', supportController.getFaqs);
router.post('/inquiries', auth.verifyToken, supportController.createInquiry);
router.get('/inquiries', auth.verifyToken, supportController.getInquiries);
router.get(
  '/inquiries/:inquiryId',
  auth.verifyToken,
  supportController.getInquiry
);
router.put('/inquiries/:inquiryId/reply', supportController.replyInquiry);

module.exports = router;
