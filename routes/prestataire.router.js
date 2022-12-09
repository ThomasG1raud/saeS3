const prestataireController = require("../controllers/prestataire.controller");
const express = require('express');
const router = express.Router();

router.get("/", prestataireController.panel);

router.get("/statistiques/:id", prestataireController.idStatistiques);
router.get("/self_edit", prestataireController.selfEdit);

module.exports = router;
