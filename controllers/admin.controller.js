const adminService = require("../services/admin.service");

exports.panel = (req, res) => {
    adminService.panel((error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.listPrestataires = (req,res) => {
    adminService.listPrestataires((error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.idPrestataires = (req,res) => {
    let id = req.params.id;
    adminService.idPrestataires(id,(error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.addPrestataires = (req,res) => {
    const news = {
        nom: req.body.nom,
        texte: req.body.texte,
        image: req.body.image,
        siren: req.body.siren,
        idCategorie: req.body.idCategorie
    }
    adminService.addPrestataires(news,(error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.updatePrestataires = (req,res) => {
    const news = {
        nom: req.body.nom,
        texte: req.body.texte,
        image: req.body.image,
        siren: req.body.siren,
        idCategory: req.body.idCategory
    }
    adminService.updatePrestataires(news,(error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.deletePrestataires = (req,res) => {
    const id = req.params.id;
    adminService.deletePrestataires(id,(error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.listStands = (req,res) => {
    adminService.listStands((error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.idStands = (req,res) => {
    const id = req.params.id;
    console.log(id); // a retirer un peu plus tard
    adminService.idStands(id,(error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.addStands = (req,res) => {
    const news = {
        libelle: req.body.libelle,
        idLoc: req.body.idLoc
    }
    adminService.addStands(news,(error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.updateStands = (req,res) => {
    const news = {
        libelle: req.body.nom,
        idLoc: req.body.idLoc
    }
    adminService.updateStands(news,(error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.deleteStands = (req,res) => {
    const id = req.params.id;
    adminService.deleteStands(id,(error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.getMap = (req,res) => {
    adminService.getMap((error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.idMap = (req,res) => {
    adminService.idMap((error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.addMap = (req,res) => {
    adminService.addMap((error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.updateMap = (req,res) => {
    adminService.updateMap((error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.deleteMap = (req,res) => {
    adminService.deleteMap((error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.showCalendar = (req, res) =>{
    adminService.showCalendrier((error, results)=>{
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.addCalendar = (req, res) =>{
    adminService.addCalendrier((error, results)=>{
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.updateCalendar = (req, res) =>{
    adminService.updateCalendrier((error, results)=>{
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.deleteCalendar = (req, res) =>{
    adminService.deleteCalendrier((error, results)=>{
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.showPrestataire = (req, res) =>{
    adminService.showPrestataire((error, results)=>{
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.showListBillet = (req, res) =>{
    adminService.showListBillet((error, results)=>{
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.showPrestataireByStand = (req, res) => {
    adminService.showPrestataireByStand((error, results)=>{
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}