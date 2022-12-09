const prestataireController = require("../controllers/prestataire.controller");
const express = require('express');
const router = express.Router();

router.get("/", prestataireController.panel);

router.get("/statistiques/:id", prestataireController.idStatistiques);
router.get("/self_edit", prestataireController.selfEdit);
router.post("/livreDOR", prestataireController.livreDOr);
router.post("/achatBillet", prestataireController.achatBillet);
router.get("/showGoodies", prestataireController.showGoodies);
router.post("/selectGoodie", prestataireController.selectGoodies);
router.get("/buyGoodies", prestataireController.buyGoodies);

module.exports = router;
