var express = require('express');
var router = express.Router();

/* GET home page. */
const random = [
  "Poggu!", "Poggy!", "Pog!", "Kappa",
  "TriHard", "PogChamp", "4Head", "cmonbruh",
  "LUL", "OmegaLuL", "hahaa", "/*This line is disabled*/",
  '<h1 class="headline" style="text-transform: uppercase;">this text is huge<h1>',
  'console.log("hello world!")', "im a twitch creep :)", "Hello from Speedtest.net!"

]
router.get('/', function(req, res, next) {
  res.render('index', { layout: 'layout', random});
});
router.get('/wp-admin', function(req, res, next) {
  res.render('wp-admin', { title: ' | You Got Jebaited!', layout: 'none' });
});
router.get('/ilisten', function(req, res, next) {
  res.render('story', { title: ' | Ilisten', layout: 'layout'});
});
router.get('/me', function(req, res, next) {
  res.render('me', { title: ' | About me', layout: 'layout'});
});

module.exports = router;









