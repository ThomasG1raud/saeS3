const selectAll = "SELECT * FROM prestataires";
const selectById = "SELECT * FROM prestataires WHERE idprestataire = $1";
const selectEmplacement = "SELECT * FROM emplacements";
const selectStand = "SELECT * FROM emplacements WHERE idemplacement = $1";
const addCalendar ="INSERT INTO calendrier(datePrestation,horaireDebut, horaireFin, idPrestataire, idStand) VALUES ($1, $2, $3, $4, $5)";
const showCalendar = "SELECT * FROM calendrier";
const updateCalendar = "UPDATE calendrier SET datePrestation = $1, horaireDebut = $2, horaireFin = $3 WHERE idPrestatire = $4 AND idStand = $5";
const deleteCalendar = "DELETE FROM calendrier WHERE datePrestation = $1 AND idPrestataire = $2 AND idStand = $3";


module.exports= {selectAll, selectById, selectEmplacement, selectStand}