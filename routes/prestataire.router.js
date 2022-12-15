const prestataireController = require("../controllers/prestataire.controller");
const express = require('express');
const router = express.Router();

/**
 * @swagger
 * / :
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
router.get("/", prestataireController.panel);
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
router.get("/statistiques/:id", prestataireController.idStatistiques);
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
router.put("/self_edit", prestataireController.selfEdit);
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
router.post("/livreDOR", prestataireController.livreDOr);
/**
 * @swagger
 * /achatBillet :
 *      post :
 *          description : Used to add a billet in the table billet with the corresponding user
 *          tags :
 *              - prestataire
 *          parameters :
 *              - id wich represent the id of the selected stats for the corresponding prestataire
 *          responses :
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.post("/achatBillet", prestataireController.achatBillet);
/**
 * @swagger
 * /showGoodies :
 *      get :
 *          description : Used to show all the available goodies proposed by the corresponding prestataire
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
router.get("/showGoodies", prestataireController.showGoodies);
/**
 * @swagger
 * /selectGoodie :
 *      get :
 *          description : Used to add the selected goodie to the table panier
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
router.post("/selectGoodie", prestataireController.selectGoodies);
/**
 * @swagger
 * /buyGoodies :
 *      get :
 *          description : Used to pass the command of the selected goodies for the corresponding client
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
router.get("/buyGoodies", prestataireController.buyGoodies);

module.exports = router;
