const pool = require("../db")

const panel = (callback) => {
    return callback(null, "ok");
}

const idStatistiques = (id,callback) => {
    return callback(null, pool.query("SELECT * FROM statistique WHERE id = $1",[id]));
}

const selfEdit = (news,callback) => {
    const texte = news.textePrestataire;
    const image = news.imagePrestaire;
    const id = news.idPrestataire;
    return callback(null, pool.query("UPDATE prestataire SET textePrestataire = $1, imagePrestataire = $2 WHERE idPrestataire = $3",[texte, image, id]));
}

module.exports = {
    panel: panel,
    idStatistiques : idStatistiques,
    selfEdit : selfEdit
}