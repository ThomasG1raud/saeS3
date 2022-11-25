module.exports = (sequelize,Sequelize) =>{
    const prestataires = sequelize.define('prestataires', {
        idPrestataire: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement:true,
            unique:true,
            primaryKey:true
        },

        nom: {
            type: Sequelize.STRING,
            allowNull: false
            // allowNull defaults to true
        },

        presenceHoraire: {
            type: Sequelize.DATE,
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
    }, {
        timestamps: false
    });
    return prestataires
}