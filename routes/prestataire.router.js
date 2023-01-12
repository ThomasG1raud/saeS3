const prestataireController = require("../controllers/prestataire.controller");
const express = require('express');
const router = express.Router();


router.get("/", prestataireController.panel); // OK
/**
 * @swagger
 * /prestataire:
 *      get :
 *          description : Used to get general informations from the prestataire table
 *          tags :
 *              - prestataire
 *          parameters : none
 *          responses :
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/statistiques/:id", prestataireController.idStatistiques); // pas OK mais normal


router.put("/", prestataireController.selfEdit); // OK
/**
 * @swagger
 * /self_edit :
 *      put :
 *          description : Used by a prestataire to edit himself
 *          tags :
 *              - prestataire
 *          parameters : none
 *          responses :
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.post("/commentaire", prestataireController.livreDOr); // OK
/**
 * @swagger
 * /livreDOr :
 *      post :
 *          description : Used to add a comment to the livreDOr
 *          tags :
 *              - prestataire
 *          parameters : none
 *          responses :
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.post("/billet", prestataireController.achatBillet); // pas OK mais normal


router.get("/commentaire/:id", prestataireController.showCommentaire); // OK

router.get("/prestataire/:id", prestataireController.selectById); // OK

router.get("/calendrier", prestataireController.showCalendrier); // OK

router.post("/calendrier", prestataireController.addCalendrier); // retour OK mais pas de resultat visible avec le get

router.put("/calendrier", prestataireController.updateCalendrier); // retour OK mais pas de resultat visible avec le get

router.delete("/calendrier", prestataireController.deleteCalendrier); // retour OK mais pas de resultat visible avec le get

module.exports = router;
