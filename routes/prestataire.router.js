const prestataireController = require("../controllers/prestataire.controller");
const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /prestataire/ :
 *      get :
 *          description : Used to get general informations from the prestataire table
 *          tags :
 *              - prestataire
 *          parameters : none
 *          responses :
 *              - 200 : ressources récupérer avec succès
 *              - 400 : erreur de requête
 *              - 500 : erreur coté serveur
 */
router.get("/", prestataireController.panel);
/**
 * @swagger
 * /prestataire/statistiques :
 *      get :
 *          description : Used to show the selected stats
 *          tags :
 *              - prestataire
 *              - statistique
 *          parameters :
 *              - id wich represent the id of the selected stats for the corresponding prestataire
 *          responses :
 *              - 200 : ressources récupérer avec succès
 *              - 400 : erreur de requête
 *              - 500 : erreur coté serveur
 */
router.get("/statistiques/:id", prestataireController.idStatistiques);
/**
 * @swagger
 * /prestataire/self_edit :
 *      get :
 *          description : Used by a prestataire to edit himself
 *          tags :
 *              - prestataire
 *          parameters : none
 *          responses :
 *              - 200 : prestataire got edited with success
 *              - 400 : erreur de requête
 *              - 500 : erreur coté serveur
 */
router.get("/self_edit", prestataireController.selfEdit);
/**
 * @swagger
 * /prestataire/livreDOr :
 *      post :
 *          description : Used to add a comment to the livreDOr
 *          tags :
 *              - prestataire
 *              - livreDOr
 *          parameters : none
 *          responses :
 *              - 200 : comment added with success
 *              - 400 : erreur de requête
 *              - 500 : erreur coté serveur
 */
router.post("/livreDOR", prestataireController.livreDOr);
/**
 * @swagger
 * /prestataire/achatBillet :
 *      post :
 *          description : Used to add a billet in the table billet with the corresponding user
 *          tags :
 *              - prestataire
 *              - statistique
 *          parameters :
 *              - id wich represent the id of the selected stats for the corresponding prestataire
 *          responses :
 *              - 200 : ressources récupérer avec succès
 *              - 400 : erreur de requête
 *              - 500 : erreur coté serveur
 */
router.post("/achatBillet", prestataireController.achatBillet);
/**
 * @swagger
 * /prestataire/showGoodies :
 *      get :
 *          description : Used to show all the available goodies proposed by the corresponding prestataire
 *          tags :
 *              - prestataire
 *              - goodies
 *          parameters : none
 *          responses :
 *              - 200 : ressources récupérer avec succès
 *              - 400 : erreur de requête
 *              - 500 : erreur coté serveur
 */
router.get("/showGoodies", prestataireController.showGoodies);
/**
 * @swagger
 * /prestataire/selectGoodie :
 *      get :
 *          description : Used to add the selected goodie to the table panier
 *          tags :
 *              - prestataire
 *              - goodies
 *              - panier
 *          parameters : none
 *          responses :
 *              - 200 : ressources récupérer avec succès
 *              - 400 : erreur de requête
 *              - 500 : erreur coté serveur
 */
router.post("/selectGoodie", prestataireController.selectGoodies);
/**
 * @swagger
 * /prestataire/buyGoodies :
 *      get :
 *          description : Used to pass the command of the selected goodies for the corresponding client
 *          tags :
 *              - prestataire
 *              - goodies
 *              - panier
 *          parameters : none
 *          responses :
 *              - 200 : ressources récupérer avec succès
 *              - 400 : erreur de requête
 *              - 500 : erreur coté serveur
 */
router.get("/buyGoodies", prestataireController.buyGoodies);

module.exports = router;
