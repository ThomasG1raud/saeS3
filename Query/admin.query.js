const selectPrestataire = "SELECT * FROM prestataires";
const selectById = "SELECT * FROM prestataires WHERE id=$1";
const addPrestataire = "INSERT INTO prestataires (nom, textePrestataire, imagePrestataire, siren, idCategory) VALUES ($1,$2,$3,$4,$5)";
const updatePrestataires = "UPDATE prestataires SET textePrestataire = $1, imagePrestataire = $2 WHERE idPrestataire = $3";
const selectModify = "SELECT * FROM modifys WHERE idPrestataire = $1";
const deleteModify = "DELETE * FROM modifys WHERE idPrestataire = $1";
const selectAccede = "SELECT * FROM accedes WHERE idPrestataire = $1";
const deleteAccede = "DELETE * FROM accedes WHERE idPrestataire = $1";
const selectRepond = "SELECT * FROM reponds WHERE idPrestataire = $1";
const deleteRepond = "DELETE * FROM reponds WHERE idPrestataire = $1";
const deletePrestataire = "DELETE FROM prestataires WHERE idPrestataire = $1";
const listStand = "SELECT * FROM emplacements";
const selectStand = "SELECT * FROM emplacements WHERE idEmplacement = $1";
const addStand = "INSERT INTO emplacements(libelleEmplacement, idLocalisation) VALUES ($1,$2)";
const updateStand = "UPDATE situes SET idEmplacement = $1, horaireDebut = $2, horaireFin = $3, idPrestataire = $4";
const selectSitue = "SELECT * FROM situes WHERE idPrestataire = $1";
const deleteSitue = "DELETE * FROM situes WHERE idPrestataire = $1";
const selectEmplacement = "SELECT * FROM comportes WHERE idPrestataire = $1";
const deleteEmplacement = "DELETE * FROM comportes WHERE idPrestataire = $1";
const deleteStand = "DELETE FROM emplacements WHERE idPrestataire = $1";

module.exports = {selectPrestataire, selectById, addPrestataire, updatePrestataires, selectModify, deleteModify, selectAccede, deleteAccede, selectRepond, deleteRepond, deletePrestataire,
listStand, selectStand, addStand, updateStand, selectSitue, deleteSitue, selectEmplacement, deleteEmplacement, deleteStand}