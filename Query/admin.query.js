const selectPrestataire = "SELECT * FROM prestataires";
const selectById = "SELECT * FROM prestataires WHERE idprestataire=$1";
const addPrestataire = "INSERT INTO prestataires (nom, textePrestataire, imagePrestataire, siren, idCategorie) VALUES ($1,$2,$3,$4,$5)";
const updatePrestataires = "UPDATE prestataires SET textePrestataire = $1, imagePrestataire = $2 WHERE idPrestataire = $3";
const selectModify = "SELECT * FROM modifie WHERE idPrestataire = $1";
const deleteModify = "DELETE FROM modifie WHERE idPrestataire = $1";
const selectAccede = "SELECT * FROM accede WHERE idPrestataire = $1";
const deleteAccede = "DELETE FROM accede WHERE idPrestataire = $1";
const selectRepond = "SELECT * FROM repond WHERE idPrestataire = $1";
const deleteRepond = "DELETE FROM repond WHERE idPrestataire = $1";
const deletePrestataire = "DELETE FROM prestataires WHERE idPrestataire = $1";
const listStand = "SELECT * FROM stands";
const selectStand = "SELECT * FROM stands WHERE idstand = $1";
const addStand = "INSERT INTO stands(libellestand, idLocalisation) VALUES ($1,$2)";
const updateStand = "UPDATE stands SET libellestand = $1 WHERE idstand = $2";
const deleteStand = "DELETE FROM stands WHERE idstand = $1";
const addCalendar ="INSERT INTO calendrier(debut,fin, idPrestataire, idStand) VALUES ($1, $2, $3, $4)";
const showCalendar = "SELECT * FROM calendrier";
const updateCalendar = "UPDATE calendrier SET debut = $1, fin = $2 WHERE idprestataire = $3 AND idStand = $4";
const deleteCalendar = "DELETE FROM calendrier WHERE debut = $1 AND idPrestataire = $2 AND idStand = $3";
const showPrestataire = "SELECT prestataires.*, categoriePrestations.libelleCategorie FROM prestataires INNER JOIN categorieprestations ON prestataires.idCategorie = categorieprestations.idCategorie"; // joint entre prestataire et categorie
const showListBillet = "SELECT billets.*, utilisateurs.*, categorieBillets.libelleCategorie FROM billets INNER JOIN utilisateurs ON billets.idUtilisateur = utilisateurs.idUtilisateur INNER JOIN categorieBillets ON categorieBillets.idCategorie = billets.idCategorie"; // joint entre billet et utilisateur et categorieBillet pour l'admin
const showPrestataireByStand = "SELECT prestataires.*, stands.* FROM situe INNER JOIN stands ON situe.idstand = stands.idstand INNER JOIN prestataires ON situe.idPrestataire = prestataires.idPrestataire"; // joint entre stand et prestataire

module.exports = {selectPrestataire, selectById, addPrestataire, updatePrestataires, selectModify, deleteModify, selectAccede, deleteAccede, selectRepond, deleteRepond, deletePrestataire,
listStand, selectStand, addStand, updateStand, deleteStand, addCalendar, showCalendar, updateCalendar, deleteCalendar, showPrestataire, showListBillet, showPrestataireByStand}