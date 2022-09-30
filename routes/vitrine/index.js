var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;



router.get('/map',(req, res, next) => {
    res.render('index', { title: 'Express' });
});




router.get('/liste_prestataires',(req, res, next) => {
    res.render('index', { title: 'Express' });
});


router.get('/liste_prestataire/infos/:id',(req, res, next) => {
    res.render('index', { title: 'Express' });
});




router.get('/stands',(req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.get('/stand/infos/:id',(req, res, next) => {
    res.render('index', { title: 'Express' });
});


