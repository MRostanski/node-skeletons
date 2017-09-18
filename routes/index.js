var express = require('express');
var router = express.Router();
var structure = require('../structure');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', structure);
});

module.exports = router;
