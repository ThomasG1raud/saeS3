const adminQuery = require("../Query/admin.query")
const pool = require("../db")


const panel = (callback) => {
    return callback(null, "Vous êtres bien sur la page d'administrateur");
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
    const idCat = news.idCategorie
    await pool.query(adminQuery.addPrestataire,[nom, texte, image, siren, idCat])
    .then(results=>{
        return callback(null, results.rows)
    })
    .catch(error=>{
        return callback(error, null)
    })
}

const updatePrestataires = async (news,callback) => {
    const texte = news.textePrestataire;
    const image = news.imagePrestaire;
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
    if(pool.query(adminQuery.selectModify, [id], (error, results)=>{
        if(results.rows.length){
            pool.query(adminQuery.deleteModify, [id]);
        }
    }));
    if(pool.query(adminQuery.selectAccede, [id], (error, results)=>{
        if(results.rows.length){
            pool.query(adminQuery.deleteAccede, [id]);
        }
    }));
    if(pool.query(adminQuery.selectRepond, [id], (error, results)=>{
        if(results.rows.length){
            pool.query(adminQuery.deleteRepond, [id]);
        }
    }));
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
    const idLoc = news.localisation;
    await pool.query(adminQuery.addStand,[libelle, idLoc])
    .then(results=>{
        return callback(null, results.rows)
    })
    .catch(error=>{
        return callback(error, null)
    })
}

const updateStands = async (news, callback) => {
    const emplacement = news.idEmplacement;
    const debut = news.horaireDebut;
    const fin = news.horaireFin;
    const prestataire = news.idPrestataire;
    await pool.query(adminQuery.updateStand,[emplacement, debut, fin, prestataire])
    .then(results=>{
        return callback(null, results.rows)
    })
    .catch(error=>{
        return callback(error, null)
    })
}

const deleteStands = async (id,callback) => {
    if(pool.query(adminQuery.selectSitue, [id], (error, results)=>{
        if(results.rows.length){
            pool.query(adminQuery.deleteSitue, [id]);
        }
    }));
    if(pool.query(adminQuery.selectEmplacement, [id], (error, results)=>{
        if(results.rows.length){
            pool.query(adminQuery.deleteEmplacement, [id]);
        }
    }));
    await pool.query(adminQuery.deleteStand,[id])
    .then(results=>{
        return callback(null, results.rows)
    })
    .catch(error=>{
        return callback(error, null)
    })
}

const getMap = async (callback) => {
    return callback(null, "ok");
}

const idMap = async (callback) => {
    return callback(null, "ok");
}

const addMap = async (callback) => {
    return callback(null, "ok");
}

const updateMap = async (callback) => {
    return callback(null, "ok");
}

const deleteMap = async (callback) => {
    return callback(null, "ok");
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
    getMap:getMap,
    idMap:idMap,
    addMap:addMap,
    updateMap:updateMap,
    deleteMap: deleteMap,
    addCalendrier: addCalendrier,
    showCalendrier: showCalendrier,
    updateCalendrier: updateCalendrier,
    deleteCalendrier: deleteCalendrier,
    showPrestataire: showPrestataire,
    showListBillet: showListBillet,
    showPrestataireByStand: showPrestataireByStand
}