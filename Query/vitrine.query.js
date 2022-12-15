const selectAll = "SELECT * FROM prestataires";
const selectById = "SELECT * FROM prestataires WHERE idprestataire = $1";
const selectEmplacement = "SELECT * FROM emplacements";
const selectStand = "SELECT * FROM emplacements WHERE idemplacement = $1";

module.exports= {selectAll, selectById, selectEmplacement, selectStand}