const selectPrestataire = "SELECT * FROM prestataires";
const selectPrestataireById = "SELECT * FROM prestataires WHERE idprestataire = $1";
const editPrestataire = "UPDATE prestataires SET textePrestataire = $1, imagePrestataire = $2 WHERE idPrestataire = $3;"
const countClient = "SELECT COUNT(idClient) FROM client WHERE state = connecte"; // à modifier
const livreDor = "INSERT INTO livreDOr (nomUtilisateur, prenomUtilisateur, mailUtilisateur, commentaire) VALUES ($1, $2)"; // à modifier
const selectUserByName = "SELECT * FROM utilisateurs WHERE nom = $1";
const addBillet = "INSERT INTO billets(prix,idutilisateur, idcategorie) VALUES ($1, $2, $3)";
const addUser = "INSERT INTO utilisateurs(nom) VALUES ($1) RETURNING idUtilisateur";

module.exports= {selectPrestataire, selectPrestataireById, editPrestataire, countClient, livreDor, selectUserByName, addBillet, addUser}