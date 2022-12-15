const vitrineController = require("../controllers/vitrine.controller");
const express = require('express');
const router = express.Router();


router.get("/", vitrineController.vitrine)
/**
 * @swagger
 * /:
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

router.get('/map', vitrineController.map);
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

router.get('/prestataires', vitrineController.listePrestataire);
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
router.get('/prestataires/:id', vitrineController.idPrestataire);
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

router.get('/stands', vitrineController.listeStand);
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
router.get('/stands/:id', vitrineController.idStand);
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


module.exports = router;
