var router = express.Router();
const adminController = require("../controllers/admin.controller");

router.get("/", adminController.getAdmin)
router.delete('/delete/:id', adminController.deleteAdmin);
router.get('/prestataires', adminController.listPrestataires);
router.get('/prestataires/:id?', adminController.idPrestataires);
router.put('/prestataires/add', adminController.addPrestataires);
router.post('/prestataires/:id/update', adminController.updatePrestataires);
router.delete('/prestataires/:id/delete', adminController.deletePrestataires);
router.get('/stands', adminController.listStands);
router.get('/stands/:id?', adminController.idStands);
router.put('/stands/add', adminController.addStands);
router.post('/stands/:id/update', adminController.updateStands);
router.delete('/stands/:id/delete', adminController.deleteStands);
router.get('/map', adminController.getMap)
router.get('/map/:id', adminController.idMap)
router.put('/map/add', adminController.addMap)
router.put('/map/:id/update', adminController.updateMap)
router.put('/map/:id/delete', adminController.deleteMap) 