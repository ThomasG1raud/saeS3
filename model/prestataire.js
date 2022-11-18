module.exports = (DataTypes,Sequelize) =>{
    const prestataire = sequelize.define('prestataire', {
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
            type: DataTypes.DATE,
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