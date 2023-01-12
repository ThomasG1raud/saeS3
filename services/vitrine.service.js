const model = require("../model/prestataire");
const vitrineQuery = require("../Query/vitrine.query")
const pool = require ("../db");

const vitrine = (callback) => {
    return callback(null, "ok");
}

const listePrestataire = async (callback) => {
    await pool.query(vitrineQuery.selectAll)
    .then(results=>{
        return callback(null, results.rows)
    })
    .catch(error=>{
        return callback(error, null)
    })
}

const listePrestataireByCategory = async (id,callback) => {
    await pool.query(vitrineQuery.selectCategoryByID, [id])
        .then(results=>{
            return callback(null, results.rows)
        })
        .catch(error=>{
            return callback(error, null)
        })
}

const listCategory = async (callback) =>{
    await pool.query(vitrineQuery.selectCategories)
        .then(results=>{
            return callback(null, results.rows)
        })
        .catch(error=>{
            return callback(error, null)
        })
}

const idPrestataire = async (id, callback) => {
    await pool.query(vitrineQuery.selectById, [id])
    .then(results=>{
        return callback(null, results.rows)
    })
    .catch(error=>{
        return callback(error, null)
    })
}

const listeStand = async (callback) => {
    await pool.query(vitrineQuery.selectEmplacement)
    .then(results=>{
        return callback(null, results.rows)
    })
    .catch(error=>{
        return callback(error, null)
    })
}

const idStand = async (id,callback) => {
    await pool.query(vitrineQuery.selectStand, [id])
    .then(results=>{
        return callback(null, results.rows)
    })
    .catch(error=>{
        return callback(error, null)
    })
}

const showCalendrier = async (callback) =>{
    await pool.query(adminQuery.showCalendar)
        .then(results=>{
            return callback(null, results.rows)
        })
        .catch(error=>{
            return callback(error, null)
        })
}


module.exports = {
    vitrine: vitrine,
    //map : map,
    listePrestataire : listePrestataire,
    idPrestataire : idPrestataire,
    listeStand : listeStand,
    idStand : idStand,
    listCategory:listCategory,
    listePrestataireByCategory:listePrestataireByCategory,
    showCalendrier:showCalendrier,
}