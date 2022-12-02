var Model = require("../model/prestataire");
const pool = require ("../db");

const vitrine = (callback) => {
    return callback(null, "ok");
}

const map = (callback) => {
    return callback(null, "ok");
}

const listePrestataire = async (callback) => {
    await pool.query("SELECT * FROM prestataires")
    .then(results=>{
        return callback(null, results.rows)
    })
    .catch(error=>{
        return callback(error, null)
    })
}

const idPrestataire = async (id, callback) => {
    await pool.query("SELECT * FROM prestataires WHERE idprestataire = $1", [id])
    .then(results=>{
        return callback(null, results.rows)
    })
    .catch(error=>{
        return callback(error, null)
    })
}

const listeStand = async (callback) => {
    await pool.query("SELECT * FROM emplacements")
    .then(results=>{
        return callback(null, results.rows)
    })
    .catch(error=>{
        return callback(error, null)
    })
}

const idStand = async (id,callback) => {
    await pool.query("SELECT * FROM prestataires WHERE idprestataire = $1", [id])
    .then(results=>{
        return callback(null, results.rows)
    })
    .catch(error=>{
        return callback(error, null)
    })
}



module.exports = {
    vitrine: vitrine,
    map : map,
    listePrestataire : listePrestataire,
    idPrestataire : idPrestataire,
    listeStand : listeStand,
    idStand : idStand
}