const adminController = require("../controllers/admin.controller");
const express = require('express');
const router = express.Router();


router.get("/", adminController.panel)

router.get('/prestataires', adminController.listPrestataires);
router.post('/prestataires/add', adminController.addPrestataires);
router.put('/prestataires/update/:id', adminController.updatePrestataires);
router.delete('/prestataires/delete/:id', adminController.deletePrestataires);
router.get('/prestataires/:id', adminController.idPrestataires);

router.get('/stands', adminController.listStands);
router.get('/stands/:id', adminController.idStands);
router.post('/stands/add', adminController.addStands);
router.put('/stands/update/:id', adminController.updateStands);
router.delete('/stands/delete/:id', adminController.deleteStands);

router.get('/map', adminController.getMap)
router.get('/map/:id', adminController.idMap)
router.post('/map/add', adminController.addMap)
router.put('/map/update/:id', adminController.updateMap)
router.delete('/map/delete/:id', adminController.deleteMap)

module.exports = router;