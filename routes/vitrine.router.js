var express = require('express');
var router = express.Router();
const db =require("../connection")

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;



router.get('/map',(req, res, next) => {
    res.render('index', { title: 'Express' });
});


router.get('/liste_prestataires',(req,res,next) =>{
    db.query('SELECT * from arezee;',(error,rows) =>{
        if(error){
            console.error(error)
        }
        else{
            console.log(rows)
        }
    })
})


router.get('/liste_prestataire/infos/:id',(req, res, next) => {
    res.render('index', { title: 'Express' });
});




router.get('/stands',(req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.get('/stand/infos/:id',(req, res, next) => {
    res.render('index', {title: 'Express'})
});


