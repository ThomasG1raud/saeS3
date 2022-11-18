module.exports = (sequelize,Sequelize) =>{
    const prestataire = sequelize.define('prestataire', {
        idPrestataire: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement:true,
            primaryKey:true
        },

        nom: {
            type: Sequelize.STRING,
            allowNull: false
            // allowNull defaults to true
        },

        presenceHoraire: {
            type: Sequelize.STRING,
            allowNull: false
        },
        textePrestataire:{
            type: Sequelize.TEXT,
            allowNull: false
        },
        imagePrestataire:{
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return prestataire
}