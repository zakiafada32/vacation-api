const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  try {
    res.redirect('/admin/signin');
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
