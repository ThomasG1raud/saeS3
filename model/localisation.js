const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');


model.exports = (sequalize,Sequalize) =>{
    const localisation = sequelize.define('localisation', {
        // Model attributes are defined here
        idLocalisation: {
            type: Sequalize.INTEGER,
            allowNull: false,
            unique:true,
            primaryKey:true

        },
        libelleLocalisation: {
            type: Sequalize.STRING,
            allowNull: fails
        },
    }, {
        // Other model options go here
    });
    return localisation
}