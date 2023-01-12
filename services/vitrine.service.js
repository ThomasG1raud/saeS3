const model = require("../model/prestataire");
const vitrineQuery = require("../Query/vitrine.query")
const pool = require ("../db");

const vitrine = (callback) => {
    return callback(null, "ok");
}

const map = (callback) => {
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

const listePrestataireByCategory = async (callback) => {
    await pool.queery(vitrineQuery.selectByCategory)
        .then(results=>{
            return callback(null, results.rows)
        })
        .catch(error=>{
            return callback(error, null)
        })
}

const listCategory = async (callback) =>{
    await pool.queery(vitrineQuery.listCategory)
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

const addCalendrier = async (tab, callback) =>{
    const date = tab.date;
    const hDebut = tab.horaireDebut;
    const hFin = tab.horaireFin;
    const idPrestataire = tab.idPrestataire;
    const idStand = tab.idStand;
    await pool.query(adminQuery.addCalendar, [date, hDebut, hFin, idPrestataire, idStand])
        .then(results=>{
            return callback(null, results.rows)
        })
        .catch(error=>{
            return callback(error, null)
        })
}

const updateCalendrier = async (tab, callback) =>{
    const date = tab.date;
    const hDebut = tab.horaireDebut;
    const hFin = tab.horaireFin;
    const idPrestataire = tab.idPrestataire;
    const idStand = tab.idStand;
    await pool.query(adminQuery.updateCalendar, [date, hDebut, hFin, idPrestataire, idStand])
        .then(results=>{
            return callback(null, results.rows)
        })
        .catch(error=>{
            return callback(error, null)
        })
}

const deleteCalendrier = async (tab, callback) =>{
    const date = tab.date;
    const idPrestataire = tab.idPrestataire;
    const idStand = tab.idStand;
    await pool.query(adminQuery.deleteCalendar, [date, idPrestataire, idStand])
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
    idStand : idStand,
    showCalendrier:showCalendrier,
    deleteCalendrier:deleteCalendrier,
    addCalendrier:addCalendrier,
    updateCalendrier:updateCalendrier
}