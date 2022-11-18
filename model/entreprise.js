module.exports = (sequelize,Sequelize) =>{
    const entreprise = sequelize.define('entreprise', {
        siren: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique:true,
            primaryKey:true
        },

        nomEntreprise: {
            type: Sequelize.TEXT,
            allowNull: false
            // allowNull defaults to true
        }
    });
    return entreprise
}