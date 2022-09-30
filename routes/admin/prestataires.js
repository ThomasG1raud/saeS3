var express = require('express');
var router = express.Router();


router.get('/admin/prestataires', (req, res, next) => {
    res.render('index', { title: 'Express' });
});



router.put('/admin/prestataire/add', (req, res, next) => {
    res.render('index', { title: 'Express' });
});




router.get('/admin/prestataire/edit/:id', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.put('/admin/prestataire/edit/:id', (req, res, next) => {
    res.render('index', { title: 'Express' });
});




router.delete('/admin/prestataire/delete/:id', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

