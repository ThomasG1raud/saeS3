const pool = require("../db");
const prestataireQuery = require("../Query/prestataire.query");

const panel = (callback) => {
    return callback(null, "ok");
}

const idStatistiques = (id,callback) => {
    pool.query(prestataireQuery.selectPrestataireById, [id])
    .then(results=>{
        return callback(null, results.rows)
    })
    .catch(error=>{
        return callback(error, null)
    })
}

const selfEdit = async (news,callback) => {
    const texte = news.texte;
    const image = news.image;
    const id = news.id;
    await pool.query(prestataireQuery.editPrestataire ,[texte, image, id])
    .then(results=>{
        return(callback(null, results.rows))
    })
    .catch(error=>{
        return(callback(error, null))
    })
}

const compteVisisteurs = async (callback) =>{
    await pool.query(prestataireQuery.countClient)
    .then(results=>{
        return (callback(null, results.rows))
    })
    .catch(error=>{
        return (callback(error, null))
    })
}

const livreDOr = async (news, callback) =>{
    await pool.query(prestataireQuery.livreDor, [news[0], news[1], news[2]])
    .then(results=>{
        return callback(null, results.rows)
    })
    .catch(error=>{
        return callback(error, null)
    })
}

const achatBillet = async (news, callback)=>{
    await pool.query(prestataireQuery.selectUserByName, [news[0]], (error, results)=>{
        if(results.rows.length){
            pool.query(prestataireQuery.addBillet, [news[1],results.rows[0], news[2]])
            .then(results=>{
                return callback(null, results.rows)
            })
            .catch(error=>{
                return callback(error, null)
            })
        }
        else{
            pool.query(prestataireQuery.addUser, [news[0]], (erreur, results)=>{
                pool.query(prestataireQuery.addBillet, [news[1],results.rows[0], news[2]])
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

const showCalendrier = async (callback) =>{
    await pool.query(prestataireQuery.showCalendar)
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
    await pool.query(prestataireQuery.addCalendar, [date, hDebut, hFin, idPrestataire, idStand])
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
    await pool.query(prestataireQuery.updateCalendar, [date, hDebut, hFin, idPrestataire, idStand])
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
    await pool.query(prestataireQuery.deleteCalendar, [date, idPrestataire, idStand])
        .then(results=>{
            return callback(null, results.rows)
        })
        .catch(error=>{
            return callback(error, null)
        })
}

const showCommentaire = async (id,callback) =>{
    await pool.query(prestataireQuery.showCommentaire, [id])
        .then(results=>{
            return callback(null, results.rows)
        })
        .catch(error=>{
            return callback(error, null)
        })
}

const selectById = async (id, callback) => {
    await pool.query(prestataireQuery.selectPrestataireById, [id])
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
    livreDOr: livreDOr,
    showCalendrier:showCalendrier,
    deleteCalendrier:deleteCalendrier,
    addCalendrier:addCalendrier,
    updateCalendrier:updateCalendrier,
    achatBillet:achatBillet,
    showCommentaire:showCommentaire,
    selectById:selectById
}