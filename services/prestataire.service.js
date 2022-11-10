const {mysql,sequalize} = require("../connection")

const panel = (callback) => {
    return callback();
}

const idStatistiques = (callback) => {
    return callback();
}

const selfEdit = (callback) => {
    return callback();
}

module.exports = {
    panel: panel,
    idStatistiques : idStatistiques,
    selfEdit : selfEdit
}