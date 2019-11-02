var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { layout: 'layout' });
});
router.get('/wp-admin', function(req, res, next) {
  res.render('wp-admin', { title: ' | You Got Jebaited!', layout: 'none' });
});
module.exports = router;
