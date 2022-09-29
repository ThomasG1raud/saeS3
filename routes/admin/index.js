var express = require('express');
var router = express.Router();
const prestataires = require("./prestataires");
const map = require("./map");
const stands = require("./stands");

/* GET home page. */
router.get('/admin', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;

router.get('/admin/statistiques', function(req, res, next) {
    res.render('index', { title: 'Express' });
});



