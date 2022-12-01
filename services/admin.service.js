const model = require("../model/index")
const pool = require("../db")


const panel = (callback) => {
    return callback(null, "Vous êtres bien sur la page d'administrateur");
}

const listPrestataires = async (callback) => {
    const prestataires = pool.query("SELECT * FROM prestataires");
    console.log(prestataires);
    return callback(null, prestataires);
}

const idPrestataires = (id, callback) => {
    return callback(null, (pool.query("SELECT * FROM prestataires WHERE id=$1"), [id]));
}

const addPrestataires = (news,callback) => {
    const nom = news.nom;
    const texte = news.texte;
    const image = image;
    const siren = image;
    const idCat = news.idCategory
    return callback(null, pool.query("INSERT INTO prestataires (nom, textePrestataire, imagePrestataire, siren, idCategory) VALUES ($1,$2,$3,$4,$5)",[nom, texte, image, siren, idCat]));
}

const updatePrestataires = (news,callback) => {
    const texte = news.textePrestataire;
    const image = news.imagePrestaire;
    const id = news.idPrestataire;
    return callback(null, pool.query("UPDATE prestataires SET textePrestataire = $1, imagePrestataire = $2 WHERE idPrestataire = $3",[texte, image, id]));
}

const deletePrestataires = (id,callback) => {
    //modifys, accedes, repond,
    if(pool.query("SELECT * FROM modifys WHERE idPrestataire = $1", [id], (error, results)=>{
        if(results.rows.length){
            pool.query("DELETE * FROM modifys WHERE idPrestataire = $1", [id]);
        }
    }));
    if(pool.query("SELECT * FROM accedes WHERE idPrestataire = $1", [id], (error, results)=>{
        if(results.rows.length){
            pool.query("DELETE * FROM accedes WHERE idPrestataire = $1", [id]);
        }
    }));
    if(pool.query("SELECT * FROM reponds WHERE idPrestataire = $1", [id], (error, results)=>{
        if(results.rows.length){
            pool.query("DELETE * FROM reponds WHERE idPrestataire = $1", [id]);
        }
    }));
    return callback(null, pool.query("DELETE FROM prestataires WHERE idPrestataire = $1",[id]));
}

const listStands = (callback) => {
    return callback(null, pool.query("SELECT * FROM emplacements"));
}

const idStands = (id,callback) => {
    return callback(null, pool.query("SELECT * FROM emplacements WHERE idEmplacement = $1",[id]));
}

const addStands = (news, callback) => {
    const libelle = news.libelle;
    const idLoc = news.localisation;
    return callback(null, pool.query("INSERT INTO emplacements(libelleEmplacement, idLocalisation) VALUES ($1,$2)",[libelle, idLoc]));
}

const updateStands = (news, callback) => {
    const emplacement = news.idEmplacement;
    const debut = news.horaireDebut;
    const fin = news.horaireFin;
    const prestataire = news.idPrestataire;
    return callback(null, pool.query("UPDATE situes SET idEmplacement = $1, horaireDebut = $2, horaireFin = $3, idPrestataire = $4",[emplacement, debut, fin, prestataire]));
}

const deleteStands = (id,callback) => {
    if(pool.query("SELECT * FROM situes WHERE idPrestataire = $1", [id], (error, results)=>{
        if(results.rows.length){
            pool.query("DELETE * FROM situes WHERE idPrestataire = $1", [id]);
        }
    }));
    if(pool.query("SELECT * FROM comportes WHERE idPrestataire = $1", [id], (error, results)=>{
        if(results.rows.length){
            pool.query("DELETE * FROM comportes WHERE idPrestataire = $1", [id]);
        }
    }));
    return callback(null, pool.query("DELETE FROM emplacements WHERE idPrestataire = $1",[id]));
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