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

const compteVisisteurs = async (callback) =>{
    await pool.query("SELECT * FROM client WHERE state = connecte")
        .then(results=>{
            return (callback(null, results.rows))
        })
        .catch(error=>{
            return (callback(error, null))
        })
}

const livreDOr = async (news, callback) =>{
    await pool.query("INSERT INTO livreDOr (nomClient, commentaire) VALUES ($1, $2)", [news[0], news[1]])
        .then(results=>{
            return callback(null, results.rows)
        })
        .catch(error=>{
            return callback(error, null)
        })
}

const achatBillet = async (news, callback)=>{
    await pool.query("SELECT * FROM utilisateur WHERE nom = $1", [news[0]], (error, results)=>{
        if(results.rows.length){
            pool.query("INSERT INTO billet(prix,idUtilsateur, idCategory) VALUES ($1, $2, $3)", [news[1],results.rows[0], news[2]])
                .then(results=>{
                    return callback(null, results.rows)
                })
                .catch(error=>{
                    return callback(error, null)
                })
        }
        else{
            pool.query("INSERT INTO utilisateur(nom) VALUES ($1) RETURNING idUtilisateur", [news[0]], (erreur, results)=>{
                pool.query("INSERT INTO billet(prix,idUtilsateur, idCategory) VALUES ($1, $2, $3)", [news[1],results.rows[0], news[2]])
                    .then(results=>{
                        return callback(null, results.rows)
                    })
                    .catch(error=>{
                        return callback(error, null)
                    })
            })
        }
    })
}

const showGoodies = async (idPrestataire, callback)=>{
    await pool.query("SELECT * FROM goodies WHERE idPrestataire = $1", [idPrestataire])
        .then(results=>{
            return callback(null, results.rows)
        })
        .catch(error=>{
            return callback(error, null)
        })
}

const selectGoodies = async(news, callback)=>{
    await pool.query("INSERT INTO panier(idGoodies, idUtilisateur) VALUES ($1, $2)", [news[0], news[1]])
        .then(results=>{
            return callback(null, results.rows)
        })
        .catch(error=>{
            return callback(error, null)
        })
}

const buyGoodies = async(news, callback)=>{
    await pool.query("SELECT * FROM panier WHERE idUtilisateur = $1", [news[0]])
        .then(results=>{
            return callback(null, results.rows)
        })
        .catch(error=>{
            return callback(error, null)
        })
}

module.exports = {
    panel: panel,
    idStatistiques : idStatistiques,
    selfEdit : selfEdit,
    compteVisisteurs: compteVisisteurs,
    buyGoodies: buyGoodies,
    selectGoodies: selectGoodies,
    showGoodies: showGoodies,
    achatBillet: achatBillet,
    livreDOr: livreDOr
}