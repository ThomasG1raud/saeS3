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
/**
 * @swagger
 * /statistiques/{id} :
 *      get :
 *          description : Used to show the selected stats
 *          tags :
 *              - prestataire
 *          parameters :
 *          - in: path
 *            name: id
 *            type: integer
 *            required: false
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

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

router.post("/avis", prestataireController.livreDOr); // OK
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
/**
 * @swagger
 * /achatBillet :
 *      post :
 *          description : Used to add a billet in the table billet with the corresponding user
 *          tags :
 *              - prestataire
 *          parameters :
 *              -  in: path
 *                 name: id
 *                 type: integer
 *                 required: false
 *          responses :
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/showCommentaire", prestataireController.showCommentaire);

router.get("/prestataire/:id", prestataireController.selectById);

module.exports = router;
