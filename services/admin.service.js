const model = require("../model/index")
const panel = (callback) => {
    return callback(null, "ok");
}

const listPrestataires = async (callback) => {
    const prestataires = await model.prestataire.findAll();
    console.log(prestataires)
    return callback(null, prestataires);
}

const idPrestataires = (callback) => {
    return callback(null, "ok");
}

const addPrestataires = (callback) => {
    return callback(null, "ok");
}

const updatePrestataires = (callback) => {
    return callback(null, "ok");
}

const deletePrestataires = (callback) => {
    return callback(null, "ok");
}

const listStands = (callback) => {
    return callback(null, "ok");
}

const idStands = (callback) => {
    return callback(null, "ok");
}

const addStands = (callback) => {
    return callback(null, "ok");
}

const updateStands = (callback) => {
    return callback(null, "ok");
}

const deleteStands = (callback) => {
    return callback(null, "ok");
}

const getMap = (callback) => {
    return callback(null, "ok");
}

const idMap = (callback) => {
    return callback(null, "ok");
}

const addMap = (callback) => {
    return callback(null, "ok");
}

const updateMap = (callback) => {
    return callback(null, "ok");
}

const deleteMap = (callback) => {
    return callback(null, "ok");
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