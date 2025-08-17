const express = require('express');
const router = express.Router();
const noticeController = require('../controllers/noticeController');
const faqController = require('../controllers/faqController');
const inquiryController = require('../controllers/inquiryController');
const { requireAuth, adminAuth } = require('../middlewares');
const {
  createInquiryValidator,
  replyInquiryValidator,
} = require('../validators');

router.get('/notices', noticeController.getNotices);
router.get('/notices/:noticeId', noticeController.getNoticeById);

router.get('/faqs', faqController.getFaqs);
router.get('/faqs/categories', faqController.getFaqCategories);
router.get('/faqs/:faqId', faqController.getFaqById);

router.get('/inquiries/categories', inquiryController.getInquiryCategories);
router.get('/inquiries', requireAuth, inquiryController.getInquiries);
router.get(
  '/inquiries/:inquiryId',
  requireAuth,
  inquiryController.getInquiryById
);
router.post(
  '/inquiries',
  requireAuth,
  createInquiryValidator,
  inquiryController.createInquiry
);
router.post(
  '/inquiries/:inquiryId/reply',
  adminAuth,
  replyInquiryValidator,
  inquiryController.replyToInquiry
);
router.delete(
  '/inquiries/:inquiryId',
  requireAuth,
  inquiryController.deleteInquiry
);

module.exports = router;
