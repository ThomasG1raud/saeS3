var Model = require("../model/prestataire");
const pool = require ("../db");

const vitrine = (callback) => {
    return callback(null, "ok");
}

const map = (callback) => {
    return callback(null, "ok");
}

const listePrestataire = (callback) => {
    const prestataires = pool.query("SELECT * FROM prestataires");
    return callback(null, prestataires);
}

const idPrestataire = (callback) => {
    const prestataire = pool.query("SELECT * FROM prestataires WHERE idprestataire = $1", [id]);
    return callback(null, prestataire);
}

const listeStand = (callback) => {
    const stands = pool.query("SELECT * FROM emplacements");
    return callback(null, stands);
}

const idStand = (callback) => {
    const stand = pool.query("SELECT * FROM prestataires WHERE idprestataire = $1", [id]);
    return callback(null, stand);
}



module.exports = {
    vitrine: vitrine,
    map : map,
    listePrestataire : listePrestataire,
    idPrestataire : idPrestataire,
    listeStand : listeStand,
    idStand : idStand
}