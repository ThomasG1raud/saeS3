const prestataireService = require("../services/prestataire.service");

exports.panel = (req, res) => {
    prestataireService.panel((error, results) => {
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

exports.idStatistiques = (req, res) => {
    const id = req.params.id;
    prestataireService.idStatistiques(id,(error, results) => {
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

exports.selfEdit = (req, res) => {
    const news = {
        texte: req.body.texte,
        image: req.body.image,
        id: req.body.id
    }
    prestataireService.selfEdit(news,(error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: "Prestataire modifié",
        });
    });
}

exports.compteVisiteurs = (req, res) => {
    prestataireService.compteVisisteurs((error, results)=>{
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    })
}

exports.livreDOr = (req, res)=>{
    const news = {
        idClient: req.body.idClient,
        comment: req.body.comment,
        idPrestataire: req.body.idPrestataire
    }
    prestataireService.livreDOr(news, (error, results)=>{
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: "Commentaire ajouté",
        });
    })
}

exports.achatBillet = (req, res) => {
    const news = {
        prix: req.body.prix,
        idUtilisateur: req.body.idUtilisateur,
        idCategory: req.body.idCategory
    }
    prestataireService.achatBillet(news, (error, results)=>{
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    })
}

exports.showCommentaire = (req, res) => {
    const id = req.params.id;
    prestataireService.showCommentaire(id,(error, results)=>{
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    })
}

exports.selectById = (req, res) => {
    const id = req.params.id;
    prestataireService.selectById(id,(error, results)=>{
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    })
}

exports.showCalendrier = (req, res) => {
    prestataireService.showCalendrier((error, results)=>{
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    })
}

exports.addCalendrier = (req, res) => {
    const tab = {
        date: req.body.date,
        hDebut: req.body.horaireDebut,
        hFin: req.body.horaireFin,
        idStand: req.body.idStand,
        idPrestataire: req.body.idPrestataire
    }
    prestataireService.addCalendrier(tab,(error, results)=>{
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    })
}

exports.deleteCalendrier = (req, res) => {
    const tab = {
        date: req.body.date,
        idStand: req.body.idStand,
        idPrestataire: req.body.idPrestataire
    }
    prestataireService.deleteCalendrier(tab,(error, results)=> {
        if (error) {
            console.log(error);
            return res.status(400).send({success: 0, data: error});
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    })
}

exports.updateCalendrier = (req, res) => {
    const tab = {
        date: req.body.date,
        hDebut: req.body.horaireDebut,
        hFin: req.body.horaireFin,
        idStand: req.body.idStand,
        idPrestataire: req.body.idPrestataire
    }
    prestataireService.updateCalendrier(tab,(error, results)=>{
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    })
}