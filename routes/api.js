const express = require('express');
const apiController = require('../controllers/apiController');
const { uploadSingle } = require('../middlewares/multer');

const router = express.Router();

router.get('/landing-page', apiController.landingPage);
router.get('/detail-page/:id', apiController.detailPage);
router.post('/booking-page', uploadSingle, apiController.bookingPage);

module.exports = router;
