var router = express.Router();
const adminController = require("../controllers/admin.controller");

router.get("/", adminController.panel)

router.get('/prestataires', adminController.listPrestataires);
router.get('/prestataires/:id?', adminController.idPrestataires);
router.put('/prestataires/add', adminController.addPrestataires);
router.post('/prestataires/update/:id', adminController.updatePrestataires);
router.delete('/prestataires/delete/id:', adminController.deletePrestataires);

router.get('/stands', adminController.listStands);
router.get('/stands/:id', adminController.idStands);
router.put('/stands/add', adminController.addStands);
router.post('/stands/update/:id', adminController.updateStands);
router.delete('/stands/delete/:id', adminController.deleteStands);

router.get('/map', adminController.getMap)
router.get('/map/:id', adminController.idMap)
router.put('/map/add', adminController.addMap)
router.put('/map/update/:id', adminController.updateMap)
router.put('/map/delete/:id', adminController.deleteMap)

module.exports = router;