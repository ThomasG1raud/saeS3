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
    if(pool.query(adminQuery.selectSitue, [id], (error, results)=>{
        if(results.rows.length){
            pool.query(adminQuery.deleteSitue, [id])
        }
    }))
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
    .then(()=>{
        return callback(null, "deleted succesfully")
    })
    .catch(error=>{
        return callback(error, null)
    })
}

const getMap = (callback) => {
    return callback(null, "ok");
}

const idMap = (callback) => {
    return callback(null, "ok");
}

const addMap = (callback) => {
    return callback(null, "ok");
}

const updateMap = (callback) => {
    return callback(null, "ok");
}

const deleteMap = (callback) => {
    return callback(null, "ok");
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
    deleteMap: deleteMap
}