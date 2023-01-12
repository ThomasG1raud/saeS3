const prestataireController = require("../controllers/prestataire.controller");
const express = require('express');
const router = express.Router();


router.get("/", prestataireController.panel); // OK
/**
 * @swagger
 * /prestataire:
 *   get:
 *      description: JSP
 *      tags:
 *          - prestataire
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/statistiques/:id", prestataireController.idStatistiques); // pas OK mais normal


router.put("/:id", prestataireController.selfEdit); // OK
/**
 * @swagger
 * /prestataire/{id}:
 *   put:
 *      description: Modifie un prestataire
 *      tags:
 *          - prestataire
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: false
 *          - in: body
 *            name: data
 *            schema:
 *              type: object
 *              properties:
 *                texte:
 *                  type: string
 *                image:
 *                  type: string
 *      responses:
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
 * /prestataire/commentaire:
 *   post:
 *      description: Ajoute un commentaire
 *      tags:
 *          - prestataire
 *      parameters:
 *          - in: body
 *            name: data
 *            schema:
 *              type: object
 *              properties:
 *                nom:
 *                  type: string
 *                prenom:
 *                  type: string
 *                comment:
 *                  type: string
 *                idPrestataire:
 *                  type: integer
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.post("/billet", prestataireController.achatBillet); // pas OK mais normal


router.get("/commentaire/:id", prestataireController.showCommentaire);
/**
 * @swagger
 * /prestataire/commentaire/{id}:
 *   get:
 *      description: Affiche le commentaire correspondant à l'id
 *      tags:
 *          - prestataire
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: false
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get("/prestataire/:id", prestataireController.selectById);
/**
 * @swagger
 * /prestataire/{id}:
 *   get:
 *      description: Affiche le prestataire correspondant à l'id
 *      tags:
 *          - prestataire
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: false
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/calendrier", prestataireController.showCalendrier);

router.put("/calendrier", prestataireController.updateCalendrier);

router.post("/calendrier", prestataireController.addCalendrier);

router.delete("/calendrier", prestataireController.deleteCalendrier);


module.exports = router;
