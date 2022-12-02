const pool = require("../db")

const panel = (callback) => {
    return callback(null, "ok");
}

const idStatistiques = (id,callback) => {
    pool.query("SELECT * FROM statistique WHERE id = $1",[id])
        .then(results=>{
            return callback(null, results.rows)
        })
        .catch(error=>{
            return callback(error, null)
        })
}

const selfEdit = async (news,callback) => {
    const texte = news.textePrestataire;
    const image = news.imagePrestaire;
    const id = news.idPrestataire;
    await pool.query("UPDATE prestataires SET textePrestataire = $1, imagePrestataire = $2 WHERE idPrestataire = $3",[texte, image, id])
        .then(results=>{
            return(callback(null, results.rows))
        })
        .catch(error=>{
            return(callback(error, null))
        })
}

module.exports = {
    panel: panel,
    idStatistiques : idStatistiques,
    selfEdit : selfEdit
}