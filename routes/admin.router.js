const adminController = require("../controllers/admin.controller");
const express = require('express');
const router = express.Router();

router.get("/", adminController.panel) // OK
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

router.get('/prestataires', adminController.listPrestataires); //OK
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
router.get('/prestataire/:id', adminController.idPrestataires); // OK
/**
 * @swagger
 * /admin/prestataire/{id}:
 *   get:
 *      description: Affiche le prestataire correspondant à l'id
 *      tags:
 *          - admin
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
router.post('/prestataire', adminController.addPrestataires); // OK
/**
 * @swagger
 * /admin/prestataire:
 *   post:
 *      description: Créer un prestataire
 *      tags:
 *          - admin
 *      parameters:
 *          - in: body
 *            name: data
 *            schema:
 *              type: object
 *              properties:
 *                nom:
 *                  type: string
 *                texte:
 *                  type: string
 *                image:
 *                  type: string
 *                siren:
 *                  type: integer
 *                idCategory:
 *                  type: integer
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.put('/prestataire/:id', adminController.updatePrestataires); // OK
/**
 * @swagger
 * /admin/prestataire/{id}:
 *   put:
 *      description: Modifie un prestataire
 *      tags:
 *          - admin
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
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.delete('/prestataire/:id', adminController.deletePrestataires); // OK
/**
 * @swagger
 * /admin/prestataire/{id}:
 *   delete:
 *      description: Supprime un prestataire
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

router.get('/stands', adminController.listStands); // OK
/**
 * @swagger
 * /admin/stands:
 *   get:
 *      description: Liste les stands
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
router.get('/stand/:id', adminController.idStands); // OK
/**
 * @swagger
 * /admin/stand/{id}:
 *   get:
 *      description: Affiche le stand correspondant à l'id
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
router.post('/stand', adminController.addStands); // OK
/**
 * @swagger
 * /admin/stand:
 *   post:
 *      description: Ajoute une stand
 *      tags:
 *          - admin
 *      parameters:
 *          - in: body
 *            name: data
 *            schema:
 *              type: object
 *              properties:
 *                libelle:
 *                  type: string
 *                idLoc:
 *                  type: integer
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.put('/stand/:id', adminController.updateStands); // OK
/**
 * @swagger
 * /admin/stand/{id}:
 *   put:
 *      description: Modifie un stand
 *      tags:
 *          - admin
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
 *                libelle:
 *                  type: string
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.delete('/stand/:id', adminController.deleteStands); // OK
/**
 * @swagger
 * /admin/stand/{id}:
 *   delete:
 *      description: Supprime une stand
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
 * /admin/calendrier:
 *   get:
 *      description: Affiche les événements du calendrier
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
router.post('/calendrier', adminController.addCalendar)
/**
 * @swagger
 * /admin/calendrier:
 *   post:
 *      description: Ajoute un événement au calendrier
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
router.put('/calendrier/:id', adminController.updateCalendar)
/**
 * @swagger
 * /admin/calendrier/{id}:
 *   put:
 *      description: Modifie un événement du calendrier
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
router.delete('/calendrier/:id', adminController.deleteCalendar)
/**
 * @swagger
 * /admin/calendrier/{id}:
 *   delete:
 *      description: Supprime un événement du calendrier
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
router.get('/prestataire/categorie', adminController.listPrestataires)
/**
 * @swagger
 * /admin/prestataire/categorie
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

router.get('/stand/prestataire', adminController.showPrestataireByStand)/**
 * @swagger
 * /admin/stand/prestataire
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