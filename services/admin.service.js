const {mysql,sequalize} = require("../connection")


const panel = (callback) => {
    try {
        return callback();
    } catch (e) {
        return callback([])
    }
}

const  listPrestataires = async () => {
    connesequelize.authenticate();
    const allPrestataire = await sequelize.query("SELECT * FROM prestataire");
    console.log(allPrestataire)
}

const idPrestataires = (callback) => {
    try {
        return callback();
    } catch (e) {
        return callback([])
    }
}

const addPrestataires = (callback) => {
    try {
        return callback();
    } catch (e) {
        return callback([])
    }
}

const updatePrestataires = (callback) => {
    try {
        return callback();
    } catch (e) {
        return callback([])
    }
}

const deletePrestataires = (callback) => {
    try {
        return callback();
    } catch (e) {
        return callback([])
    }
}

const listStands = (callback) => {
    try {
        return callback();
    } catch (e) {
        return callback([])
    }
}

const idStands = (callback) => {
    try {
        return callback();
    } catch (e) {
        return callback([])
    }
}

const addStands = (callback) => {
    try {
        return callback();
    } catch (e) {
        return callback([])
    }
}

const updateStands = (callback) => {
    try {
        return callback();
    } catch (e) {
        return callback([])
    }
}

const deleteStands = (callback) => {
    try {
        return callback();
    } catch (e) {
        return callback([])
    }
}

const getMap = (callback) => {
    try {
        return callback();
    } catch (e) {
        return callback([])
    }
}

const idMap = (callback) => {
    try {
        return callback();
    } catch (e) {
        return callback([])
    }
}

const addMap = (callback) => {
    try {
        return callback();
    } catch (e) {
        return callback([])
    }
}

const updateMap = (callback) => {
    try {
        return callback();
    } catch (e) {
        return callback([])
    }
}

const deleteMap = (callback) => {
    try {
        return callback();
    } catch (e) {
        return callback([])
    }
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