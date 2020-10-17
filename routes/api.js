const express = require('express');
const { route } = require('.');
const apiController = require('../controllers/apiController');

const router = express.Router();

router.get('/landing-page', apiController.landingPage);

module.exports = router;
