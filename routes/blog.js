var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('blog/index', { title: '- Blog', layout: 'blog/layout' });
});

module.exports = router;
