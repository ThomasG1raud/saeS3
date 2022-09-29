router.get('/admin/map', (req, res, next) => {
    res.render('index', { title: 'Express' });
});


router.put('/admin/add', (req, res, next) => {
    res.render('index', { title: 'Express' });
});


router.get('/admin/edit/:id', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.put('/admin/edit/:id', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.delete('/admin/delete/:id', (req, res, next) => {
    res.render('index', { title: 'Express' });
});