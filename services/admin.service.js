const {mysql,sequalize} = require("../connection")


const panel = (callback) => {
return callback();
}

const listPrestataires = async () => {
    connesequelize.authenticate();
    const allPrestataire = await sequelize.query("SELECT * FROM prestataire");
    console.log(allPrestataire)
}

const idPrestataires = (callback) => {
    return callback();
}

const addPrestataires = (callback) => {
    return callback();
}

const updatePrestataires = (callback) => {
    return callback();
}

const deletePrestataires = (callback) => {
    return callback();
}

const listStands = (callback) => {
    return callback();
}

const idStands = (callback) => {
    return callback();
}

const addStands = (callback) => {
    return callback();
}

const updateStands = (callback) => {
    return callback();
}

const deleteStands = (callback) => {
    return callback();
}

const getMap = (callback) => {
    return callback();
}

const idMap = (callback) => {
    return callback();
}

const addMap = (callback) => {
    return callback();
}

const updateMap = (callback) => {
    return callback();
}

const deleteMap = (callback) => {
    return callback();
}

module.exports = {
    panel: panel,
    listPrestataires:listPrestataires,
    idPrestataires:idPrestataires,
    addPrestataires:addPrestataires,
    updatePrestataires:updatePrestataires,
    deletePrestataires:deletePrestataires,
    listStands:listStands,
    idStands:idStands,
    addStands:addStands,
    updateStands:updateStands,
    deleteStands:deleteStands,
    getMap:getMap,
    idMap:idMap,
    addMap:addMap,
    updateMap:updateMap,
    deleteMap: deleteMap
}