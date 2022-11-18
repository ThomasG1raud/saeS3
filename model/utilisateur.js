module.exports = (sequelize,Sequelize) =>{
    const utilisateur = sequelize.define('utilisateur', {
        idUtilisateur: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement:true,
            primaryKey:true
        },

        typeCompte: {
            type: Sequelize.INTEGER,
            allowNull: false
            // allowNull defaults to true
        },

        mdp: {
            type: Sequelize.STRING,
            allowNull: false
        },

        login:{
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return utilisateur
}