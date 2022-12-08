const selectPrestataire = "SELECT * FROM prestataires";
const selectPrestataireById = "SELECT * FROM prestataires WHERE idprestataire = $1";
const editPrestataire = "UPDATE prestataires SET textePrestataire = $1, imagePrestataire = $2 WHERE idPrestataire = $3;"
const countClient = "SELECT COUNT(idClient) FROM client WHERE state = connecte"; // à modifier
const livreDor = "INSERT INTO livreDOr (nomClient, commentaire) VALUES ($1, $2)"; // à modifier
const selectUserByName = "SELECT * FROM utilisateur WHERE nom = $1";
const addBillet = "INSERT INTO billet(prix,idUtilsateur, idCategory) VALUES ($1, $2, $3)";
const addUser = "INSERT INTO utilisateur(nom) VALUES ($1) RETURNING idUtilisateur";
const showGoodies = "SELECT * FROM goodies WHERE idPrestataire = $1";
const addToCart = "INSERT INTO panier(idGoodies, idUtilisateur) VALUES ($1, $2)";
const showCart = "SELECT * FROM panier WHERE idUtilisateur = $1";

module.exports= {selectPrestataire, selectPrestataireById, editPrestataire, countClient, livreDor, selectUserByName, addBillet, addUser, showGoodies, addToCart, showCart}