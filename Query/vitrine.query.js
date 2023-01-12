const selectAll = "SELECT * FROM prestataires";
const selectById = "SELECT prestataires.*, emplacements.libelle," +
    "calendrier.*, categorie.libelle" +
    " FROM prestataires " +
    "INNER JOIN calendrier ON calendrier.idPrestataire = prestataire.idPrestataire "+
    "INNER JOIN situes ON situes.idPrestataire = prestataires.idPrestataires "+
    "INNER JOIN emplacement ON emplacement.idEmplacement = situes.idEmplacement "+
    "INNER JOIN categoriePrestations ON categoriePrestation.idCategorie = prestataire.idCategorie "+
    "WHERE idprestataire = $1";
const selectEmplacement = "SELECT * FROM emplacements";
const selectStand = "SELECT * FROM emplacements WHERE idemplacement = $1";
const selectCategories = "SELECT * FROM categorieprestations";
const selectCategoryByID = "SELECT * FROM prestataires INNER JOIN categorieprestations c on c.idcategorie = prestataires.idcategorie WHERE prestataires.idcategorie = $1";
const showCalendar = "SELECT * FROM calendrier";
const addCommentaire = "INSERT INTO livreDOr (commentaire, idUtilisateur) VALUES ($1,$2)";


module.exports= {selectAll, selectById, selectEmplacement, selectStand, selectCategories, selectCategoryByID, showCalendar, addCommentaire}