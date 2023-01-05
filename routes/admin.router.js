const adminController = require("../controllers/admin.controller");
const express = require('express');
const router = express.Router();

router.get("/", adminController.panel)
/**
 * @swagger
 * /admin:
 *   get:
 *      description: JSP
 *      tags:
 *          - admin
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/prestataires', adminController.listPrestataires);
/**
 * @swagger
 * /admin/prestataires:
 *   get:
 *      description: Liste les prestataires
 *      tags:
 *          - admin
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.post('/prestataires/add', adminController.addPrestataires);
/**
 * @swagger
 * /admin/prestataires/add:
 *   post:
 *      description: Ajoute un prestataire
 *      tags:
 *          - admin
 *      parameters:
 *          - in: body
 *            description: Prestataire à créer
 *            schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               texte:
 *                 type: string
 *               image:
 *                 type: string
 *               siren:
 *                 type: integer
 *               idCategory:
 *                 type: integer
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
 * /admin/prestataires/update/{id}:
 *   put:
 *      description: Update the information of a given prestataire
 *      tags:
 *          - admin
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
 * admin/prestataires/delete/{id}:
 *   delete:
 *      description: Delete a given personn from the table prestataire
 *      tags:
 *          - admin
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
router.get('/prestataire/:id', adminController.idPrestataires);
/**
 * @swagger
 * admin/prestataire/{id}:
 *   get:
 *      description: Used to get the specified prestataire
 *      tags:
 *          - admin
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
 * admin/stands:
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
router.get('/stand/:id', adminController.idStands);
/**
 * @swagger
 * admin/stand/{id}:
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
router.post('/stand/add', adminController.addStands);
/**
 * @swagger
 * admin/stand/add:
 *   post:
 *      description: Add a new stand to the table stand
 *      tags:
 *          - admin
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.put('/stand/update/:id', adminController.updateStands);
/**
 * @swagger
 * /admin/stand/update/{id}:
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
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.delete('/stand/delete/:id', adminController.deleteStands);
/**
 * @swagger
 * /admin/stands/delete/{id}:
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
 *              description: Resource deleted successfully
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

router.get('/calendrier', adminController.showCalendar)
/**
 * @swagger
 * /calendrier
 *   get:
 *      description: Show the calendar and the event in it
 *      tags:
 *          - admin
 *      responses:
 *          '200':
 *              description: Resource showed successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.post('/calendrier/add', adminController.addCalendar)
/**
 * @swagger
 * /calendrier/add
 *   post:
 *      description: add an event to the calendar
 *      tags:
 *          - admin
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.put('/calendrier/update/:id', adminController.updateCalendar)
/**
 * @swagger
 * /calendrier/update/{id}:
 *   put:
 *      description: update the selected event
 *      tags:
 *          - admin
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
router.delete('/calendrier/delete/:id', adminController.deleteCalendar)
/**
 * @swagger
 * /calendrier/delete/{id}:
 *   delete:
 *      description: Delete the selected event from the calendar
 *      tags:
 *          - admin
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
router.get('/showPrestataire', adminController.listPrestataires)
/**
 * @swagger
 * /showPrestataire
 *   get:
 *      description: show all the content from the prestataire table with the name of their category
 *      tags:
 *          - admin
 *      responses:
 *          '200':
 *              description: Resource showed successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get('/showListBillet', adminController.showListBillet)
/**
 * @swagger
 * /showListBillet
 *   get:
 *      description: show all the content from the billets table with the name of their category and the users who bought it
 *      tags:
 *          - admin
 *      responses:
 *          '200':
 *              description: Resource showed successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get('/listStandPrestataire', adminController.showPrestataireByStand)/**
 * @swagger
 * /listStandPrestataire
 *   get:
 *      description: show all the content from the stand table with the associated prestataire
 *      tags:
 *          - admin
 *      responses:
 *          '200':
 *              description: Resource showed successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


module.exports = router;