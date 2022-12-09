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
    const news = req.body;
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
    const news = req.body
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
    const news = req.body
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
    const news = req.body
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
    const news = req.body
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