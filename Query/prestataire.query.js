const selectPrestataire = "SELECT * FROM prestataires";
const selectPrestataireById = "SELECT * FROM prestataires WHERE idprestataire = $1";
const editPrestataire = "UPDATE prestataires SET textePrestataire = $1, imagePrestataire = $2 WHERE idPrestataire = $3;"
const countClient = "SELECT COUNT(idClient) FROM client WHERE state = connecte"; // à modifier
const livreDor = "INSERT INTO livreDOr (nomUtilisateur, prenomUtilisateur, mailUtilisateur, commentaire) VALUES ($1, $2)"; // à modifier
const selectUserByName = "SELECT * FROM utilisateurs WHERE nom = $1";
const addBillet = "INSERT INTO billets(prix,idutilisateur, idcategorie) VALUES ($1, $2, $3)";
const addUser = "INSERT INTO utilisateurs(nom) VALUES ($1) RETURNING idUtilisateur";
const addCalendar ="INSERT INTO calendrier(datePrestation,horaireDebut, horaireFin, idPrestataire, idStand) VALUES ($1, $2, $3, $4, $5)";
const showCalendar = "SELECT * FROM calendrier";
const updateCalendar = "UPDATE calendrier SET datePrestation = $1, horaireDebut = $2, horaireFin = $3 WHERE idPrestatire = $4 AND idStand = $5";
const deleteCalendar = "DELETE FROM calendrier WHERE datePrestation = $1 AND idPrestataire = $2 AND idStand = $3";


module.exports= {selectPrestataire, selectPrestataireById, editPrestataire, countClient, livreDor, selectUserByName, addBillet, addUser}