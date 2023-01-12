const adminQuery = require("../Query/admin.query")
const pool = require("../db")


const panel = (callback) => {
    return callback(null, "Vous êtes bien sur la page d'administrateur");
}

const listPrestataires = async (callback) => {
    await pool.query(adminQuery.selectPrestataire)
    .then(results=>{
        return callback(null, results.rows)
    })
    .catch(error=>{
        return callback(error, null)
    })
}

const idPrestataires = async (id, callback) => {
    await pool.query(adminQuery.selectById, [id])
    .then(results=>{
        return callback(null, results.rows)
    })
    .catch(error=>{
        return callback(error, null)
    })
}

const addPrestataires = async (news,callback) => {
    const nom = news.nom;
    const texte = news.texte;
    const image = news.image;
    const siren = news.siren;
    const idCategory = news.idCategory;
    await pool.query(adminQuery.addPrestataire,[nom, texte, image, siren, idCategory])
    .then(results=>{
        return callback(null, results.rows)
    })
    .catch(error=>{
        return callback(error, null)
    })
}

const updatePrestataires = async (news,callback) => {
    const texte = news.textePrestataire;
    const image = news.imagePrestataire;
    const id = news.idPrestataire;
    await pool.query(adminQuery.updatePrestataires,[texte, image, id])
    .then(results=>{
        return callback(null, results.rows)
    })
    .catch(error=>{
        return callback(error, null)
    })
}

const deletePrestataires = async (id,callback) => {
    await pool.query(adminQuery.deletePrestataire,[id])
    .then(results=>{
        return callback(null, results.rows)
    })
    .catch(error=>{
        return callback(error, null)
    })
}

const listStands = async (callback) => {
    await pool.query(adminQuery.listStand)
    .then(results=>{
        return callback(null, results.rows)
    })
    .catch(error=>{
        return callback(error, null)
    })
}

const idStands = async (id,callback) => {
    await pool.query(adminQuery.selectStand,[id])
    .then(results=>{
        return callback(null, results.rows)
    })
    .catch(error=>{
        return callback(error, null)
    })
}

const addStands = async (news, callback) => {
    const libelle = news.libelle;
    const idLoc = news.idLoc;
    await pool.query(adminQuery.addStand,[libelle, idLoc])
    .then(results=>{
        return callback(null, results.rows)
    })
    .catch(error=>{
        return callback(error, null)
    })
}

const updateStands = async (news, callback) => {
    const libelle = news.libelle;
    const stand = news.idStands;
    await pool.query(adminQuery.updateStand,[libelle, stand])
    .then(results=>{
        return callback(null, results.rows)
    })
    .catch(error=>{
        return callback(error, null)
    })
}

const deleteStands = async (id,callback) => {
    await pool.query(adminQuery.deleteStand,[id])
    .then(()=>{
        return callback(null, "deleted succesfully")
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
    const hDebut = tab.horaireDebut;
    const hFin = tab.horaireFin;
    const idPrestataire = tab.idPrestataire;
    const idStand = tab.idStand;
    await pool.query(adminQuery.addCalendar, [ hDebut, hFin, idPrestataire, idStand])
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

const showPrestataire = async (callback) =>{
    await pool.query(adminQuery.showPrestataire)
        .then(results=>{
            return callback(null, results.rows)
        })
        .catch(error=>{
            return callback(error, null)
        })
}

const showListBillet = async (callback) =>{
    await pool.query(adminQuery.showListBillet)
        .then(results=>{
            return callback(null, results.rows)
        })
        .catch(error=>{
            return callback(error, null)
        })
}

const showPrestataireByStand = async (callback) =>{
    await pool.query(adminQuery.showPrestataireByStand)
        .then(results=>{
            return callback(null, results.rows)
        })
        .catch(error=>{
            return callback(error, null)
        })
}

module.exports = {
    panel: panel,
    listPrestataires:listPrestataires,
    idPrestataires:idPrestataires,
    addPrestataires:addPrestataires,
    updatePrestataires:updatePrestataires,
    deletePrestataires:deletePrestataires,
    listStands:listStands,
    idStands:idStands,
    addStands:addStands,
    updateStands:updateStands,
    deleteStands:deleteStands,
    showCalendrier:showCalendrier,
    deleteCalendrier:deleteCalendrier,
    addCalendrier:addCalendrier,
    updateCalendrier:updateCalendrier,
    showPrestataire:showPrestataire,
    showListBillet:showListBillet,
    showPrestataireByStand:showPrestataireByStand
}