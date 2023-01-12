const selectPrestataire = "SELECT * FROM prestataires";
const selectPrestataireById = "SELECT * FROM prestataires WHERE idprestataire = $1";
const editPrestataire = "UPDATE prestataires SET textePrestataire = $1, imagePrestataire = $2 WHERE idPrestataire = $3;"
const countClient = "SELECT COUNT(idClient) FROM client WHERE state = connecte"; // à modifier
const livreDor = "INSERT INTO livreDOr ( idUtilisateur, commentaire, idPrestataire) VALUES ($1, $2, $3)";
const selectUserByName = "SELECT * FROM utilisateurs WHERE nom = $1";
const addBillet = "INSERT INTO billets(prix,idutilisateur, idcategorie) VALUES ($1, $2, $3)";
const addUser = "INSERT INTO utilisateurs(nom) VALUES ($1) RETURNING idUtilisateur";
const addCalendar ="INSERT INTO calendrier(horaireDebut, horaireFin, idPrestataire, idStand) VALUES ($2, $3, $4, $5)";
const showCalendar = "SELECT * FROM calendrier";
const updateCalendar = "UPDATE calendrier SET horaireDebut = $1, horaireFin = $2 WHERE idPrestatire = $3 AND idStand = $4";
const deleteCalendar = "DELETE FROM calendrier WHERE debut = $1 AND fin = $2 AND idPrestataire = $3 AND idStand = $4";
const showCommentaire= "SELECT * FROM livreDOr WHERE idPrestataire = $1";

module.exports= {showCommentaire,addCalendar, showCalendar, deleteCalendar, updateCalendar, selectPrestataireById, editPrestataire, countClient, livreDor, selectUserByName, addBillet, addUser}