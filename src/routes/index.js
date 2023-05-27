var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Make Quiz' });
});

router.get('/create-quiz', function(req, res, next) {
  res.render('create-quiz', { title: 'Make Quiz' });
});

module.exports = router;
