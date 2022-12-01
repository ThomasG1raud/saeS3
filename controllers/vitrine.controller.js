const vitrineService = require("../services/vitrine.service");
const Model = require('../model/index');
const sequelize = require('sequelize');
const pool = require("../db");

exports.vitrine = (req, res) => {
    vitrineService.vitrine((error, results) => {
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

exports.map = (req, res) => {
    vitrineService.map((error, results) => {
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

exports.listePrestataire = (req, res) => {
    /*const prestataire = Model.prestataire.findAll().then((results)=>{
        console.log(results);
        return res.status(200).send({sucesss : 1, data: results});
    });
    console.log(prestataire);*/
    pool.query("SELECT * FROM prestataire", (error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

exports.idPrestataire = (req, res) => {
    const id = req.params.id;
    /*const prestataire = Model.prestataire.findOne({ where: { id: id } }).then((results)=>{
        console.log(results);
        return res.status(200).send({sucesss : 1, data: results});
    });
    console.log(prestataire);*/
    pool.query("SELECT * FROM prestataire WHERE id = $1",[id], (error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

exports.listeStand = (req, res) => {
    vitrineService.vitrine((error, results) => {
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

exports.idStand = (req, res) => {
    vitrineService.vitrine((error, results) => {
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

