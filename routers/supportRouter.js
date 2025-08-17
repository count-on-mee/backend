const express = require('express');
const router = express.Router();
const noticeController = require('../controllers/noticeController');
const faqController = require('../controllers/faqController');
const inquiryController = require('../controllers/inquiryController');
const { requireAuth, adminAuth } = require('../middlewares');
const {
  createInquiryValidator,
  replyInquiryValidator,
  createNoticeValidator,
  updateNoticeValidator,
  createFaqValidator,
  updateFaqValidator,
} = require('../validators');

router.post(
  '/notices',
  adminAuth,
  createNoticeValidator,
  noticeController.createNotice
);
router.get('/notices', noticeController.getNotices);
router.get('/notices/:noticeId', noticeController.getNoticeById);
router.patch(
  '/notices/:noticeId',
  adminAuth,
  updateNoticeValidator,
  noticeController.updateNotice
);
router.delete('/notices/:noticeId', adminAuth, noticeController.deleteNotice);

router.post('/faqs', adminAuth, createFaqValidator, faqController.createFaq);
router.get('/faqs', faqController.getFaqs);
router.get('/faqs/categories', faqController.getFaqCategories);
router.get('/faqs/:faqId', faqController.getFaqById);
router.patch(
  '/faqs/:faqId',
  adminAuth,
  updateFaqValidator,
  faqController.updateFaq
);
router.delete('/faqs/:faqId', adminAuth, faqController.deleteFaq);

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
