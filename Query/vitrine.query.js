const selectAll = "SELECT * FROM prestataires";
const selectById = "SELECT * FROM prestataires WHERE idprestataire = $1";
const selectEmplacement = "SELECT * FROM emplacements";
const selectStand = "SELECT * FROM emplacements WHERE idemplacement = $1";
const selectCategories = "SELECT * FROM categorieprestations";
const selectCategoryByID = "SELECT * FROM prestataires INNER JOIN categorieprestations c on c.idcategorie = prestataires.idcategorie WHERE prestataires.idcategorie = $1";
const showCalendar = "SELECT * FROM calendrier";


module.exports= {selectAll, selectById, selectEmplacement, selectStand, selectCategories, selectCategoryByID, showCalendar}