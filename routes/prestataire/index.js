var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/prestataire", function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;


router.get("/prestataire/statistiques", (req, res, next) => {
    res.render('index', { title: 'Express' });
});



router.get("/prestataire/edit/:id", (req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.post("/prestataire/edit/:id", (req, res, next) => {
    res.render('index', { title: 'Express' });
});
