var express = require('express');
var router = express.Router();

/* GET home page. */
const random = [
    "Poggu!", "Poggy!", "Pog!", "Kappa",
    "TriHard", "PogChamp", "4Head", "cmonbruh",
    "LUL", "OmegaLuL", "hahaa", "/*This line is disabled*/",
    '<h1 class="headline" style="text-transform: uppercase;">this text is huge<h1>',
    'console.log("hello world!")', "im a twitch creep :)", "Hello from Speedtest.net!",
    "Trump has been banned from our platform", "Welcome to 2020 Season 2!", "You can now play 2020 as luigi",
    "Click here to cancel your subscription to 2021", "Website goes BRRRRRR!"

]
router.get('/', function(req, res, next) {
    let number = Math.round(Math.random() * 100)
    if (number == 69) {
        var name = "ANOIRHTSA"
    } else {
        var name = "ASTHRIONA"
    }
    const bg = Math.round(Math.random() * 5) + 1

    res.render('index', { layout: 'layout', random, name, number, bg });
});
router.get('/wp-admin', function(req, res, next) {
    res.render('wp-admin', { title: ' | You Got Jebaited!', layout: 'none' });
});
router.get('/ilisten', function(req, res, next) {
    res.render('story', { title: ' | Ilisten', layout: 'layout' });
});
router.get('/me', function(req, res, next) {
    res.render('me', { title: ' | About me', layout: 'layout' });
});

module.exports = router;