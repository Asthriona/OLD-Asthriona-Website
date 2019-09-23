var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Asthriona' });
});
router.get('/wp-admin', function(req, res, next) {
  res.render('wp-admin', { title: 'Asthriona | You Got Jebaited!', layout: 'none' });
});
//keyboard routes
router.get('/keyboard', function(req, res, next) {
  res.render('kbd/kbdindex', { title: 'Asthriona | Keyboard', layout: 'kbd/kbdlayout' });
});
router.get('/keyboard/admin', function(req, res, next) {
  res.render('kbd/kbdadmin', { title: 'Asthriona | Keyboard', layout: 'kbd/kbdlayout' });
});
router.get('/keyboard/client', function(req, res, next) {
  res.render('kbd/kbdclient', { title: 'Asthriona | Keyboard', layout: 'kbd/kbdlayout' });
});
router.get('/keyboard/commands', function(req, res, next) {
  res.render('kbd/kbdcommand', { title: 'Asthriona | Keyboard', layout: 'kbd/kbdlayout' });
});
router.get('/keyboard/faq', function(req, res, next) {
  res.render('kbd/kbdfaq', { title: 'Asthriona | Keyboard', layout: 'kbd/kbdlayout' });
});
module.exports = router;
