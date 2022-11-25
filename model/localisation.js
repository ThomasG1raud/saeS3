module.exports = (sequelize,Sequelize) =>{
    const localisations = sequelize.define('localisations', {
        // Model attributes are defined here
        idLocalisation: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement:true,
            unique:true,
            primaryKey:true

        },
        libelleLocalisation: {
            type: Sequelize.TEXT,
            allowNull: false
        },
    }, {
        timestamps: false
    });
    return localisations
}