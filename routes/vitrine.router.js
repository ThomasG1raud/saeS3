const vitrineController = require("../controllers/vitrine.controller");
const express = require('express');
const router = express.Router();


router.get("/", vitrineController.vitrine)


router.get('/map', vitrineController.map);


router.get('/prestataires', vitrineController.listePrestataire)
router.get('/prestataires/:id', vitrineController.idPrestataire);


router.get('/stands', vitrineController.listeStand);
router.get('/stands/:id', vitrineController.idStand);



module.exports = router;
