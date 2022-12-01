var Model = require("../model/prestataire");
const pool = require ("../db");

const vitrine = (callback) => {
    return callback(null, "ok");
}

const map = (callback) => {
    return callback(null, "ok");
}

const listePrestataire = (callback) => {
    const prestataire = pool.query("SELECT * FROM prestataires");
    return callback(null, prestataire);
}

const idPrestataire = (callback) => {
    const prestataire = pool.query("SELECT * FROM prestataires WHERE idprestataire = $1", [id]);
    return callback(null, prestataire);
}

const listeStand = (callback) => {
    return callback(null, "ok");
}

const idStand = (callback) => {
    return callback(null, "ok");
}



module.exports = {
    vitrine: vitrine,
    map : map,
    listePrestataire : listePrestataire,
    idPrestataire : idPrestataire,
    listeStand : listeStand,
    idStand : idStand
}