const vitrineController = require("../controllers/vitrine.controller");
const express = require('express');
const router = express.Router();


router.get("/vitrine", vitrineController.vitrine) // OK
/**
 * @swagger
 * /vitrine:
 *   get:
 *      description: JSP
 *      tags:
 *          - vitrine
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/map', vitrineController.map); // pas OK mais normal
/**
 * @swagger
 * /map:
 *   get:
 *      description: JSP
 *      tags:
 *          - vitrine
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/prestataires', vitrineController.listePrestataire); // OK
/**
 * @swagger
 * /prestataires:
 *   get:
 *      description: Liste tous les prestataires
 *      tags:
 *          - vitrine
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get('/prestataires/:id', vitrineController.idPrestataire); // OK
/**
 * @swagger
 * /prestataires/{id}:
 *   get:
 *      description: Liste les prestataires par ID
 *      tags:
 *          - vitrine
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

router.get('/stands', vitrineController.listeStand); // OK
/**
 * @swagger
 * /stands:
 *   get:
 *      description: Liste tous les stands
 *      tags:
 *          - vitrine
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get('/stands/:id', vitrineController.idStand); // OK
/**
 * @swagger
 * /stands/{id}:
 *   get:
 *      description: Liste les stands par ID
 *      tags:
 *          - vitrine
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
router.get('/category', vitrineController.selectCategories); // OK

router.get('/category/:id', vitrineController.prestataireByIdCategory); // OK

router.post('/commentaire', vitrineController.addCommentaire); //OK


module.exports = router;
