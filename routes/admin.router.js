const adminController = require("../controllers/admin.controller");
const express = require('express');
const router = express.Router();


router.get("/", adminController.panel)
/**
 * @swagger
 * /:
 *   get:
 *      description: List all the information for an admin
 *      tags:
 *          - admin
 *      responses:
 *          '200':
 *              description: Resource listed successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/prestataires', adminController.listPrestataires);
/**
 * @swagger
 * /prestataires:
 *   get:
 *      description: List all informations contained in the prestataire table
 *      tags:
 *          - admin
 *      responses:
 *          '200':
 *              description: Resource listed successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.post('/prestataires/add', adminController.addPrestataires);
/**
 * @swagger
 * /prestataires/add:
 *   post:
 *      description: Add a new personn to the prestataire table
 *      tags:
 *          - admin
 *          - prestataires
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.put('/prestataires/update/:id', adminController.updatePrestataires);
/**
 * @swagger
 * /prestataires/update/{id}:
 *   put:
 *      description: Update the information of a given prestataire
 *      tags:
 *          - admin
 *          - prestataires
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: false
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.delete('/prestataires/delete/:id', adminController.deletePrestataires);
/**
 * @swagger
 * /prestataires/delete{id}:
 *   delete:
 *      description: Delete a given personn from the table prestataire
 *      tags:
 *          - admin
 *          - prestataires
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: false
 *      responses:
 *          '200':
 *              description: Resource deleted successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get('/prestataires/:id', adminController.idPrestataires);
/**
 * @swagger
 * /prestataires/{id}:
 *   get:
 *      description: Used to get the specified prestataire
 *      tags:
 *          - admin
 *          - prestataires
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: false
 *      responses:
 *          '200':
 *              description: Resource recupered successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/stands', adminController.listStands);
/**
 * @swagger
 * /stands:
 *   get:
 *      description: list all the informations about the stands
 *      tags:
 *          - admin
 *      responses:
 *          '200':
 *              description: Resource listed successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get('/stands/:id', adminController.idStands);
/**
 * @swagger
 * /stands/{id}:
 *   get:
 *      description: list all the informations about the selected stands
 *      tags:
 *          - admin
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: false
 *      responses:
 *          '200':
 *              description: Resource listed successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.post('/stands/add', adminController.addStands);
/**
 * @swagger
 * /stands/add:
 *   post:
 *      description: Add a new stand to the table stand
 *      tags:
 *          - admin
 *      responses:
 *          '200':
 *              description: Resource listed successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.put('/stands/update/:id', adminController.updateStands);
/**
 * @swagger
 * /stands/update/{id}:
 *   put:
 *      description: Add a new stand to the table stand
 *      tags:
 *          - admin
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: false
 *      responses:
 *          '200':
 *              description: Resource listed successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.delete('/stands/delete/:id', adminController.deleteStands);
/**
 * @swagger
 * /stands/delete/{id}:
 *   delete:
 *      description: Delete the selected stand from the Table stand
 *      tags:
 *          - admin
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: false
 *      responses:
 *          '200':
 *              description: Resource listed successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get('/map', adminController.getMap)
router.get('/map/:id', adminController.idMap)
router.post('/map/add', adminController.addMap)
router.put('/map/update/:id', adminController.updateMap)
router.delete('/map/delete/:id', adminController.deleteMap)

module.exports = router;