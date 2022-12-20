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
        texte: req.body.nom,
        image: req.body.idLoc,
        id: req.body.id
    }
    prestataireService.selfEdit(news,(error, results) => {
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
        comment: req.body.comment
    }
    prestataireService.livreDOr(news, (error, results)=>{
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

exports.showGoodies = (req, res) => {
    const id = req.params.id
    prestataireService.showGoodies(id, (error, results)=>{
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

exports.selectGoodies = (req, res) =>{
    const news = {
        idGoodies: req.body.idGoodies,
        idUtilisateur: req.body.idUtilisateur
    }
    prestataireService.selectGoodies(news, (error, results)=>{
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

exports.buyGoodies = (req, res) => {
    const news = {
        idGoodies: req.body.idGoodies,
        idUtilisateur: req.body.idUtilisateur
    }
    prestataireService.buyGoodies(news, (error, results)=>{
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