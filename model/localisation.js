module.exports = (sequelize,Sequelize) =>{
    const localisation = sequelize.define('localisation', {
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
    return localisation
}