module.exports = (sequelize,Sequelize) =>{
    const utilisateur = sequelize.define('utilisateur', {
        idUtilisateur: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement:true,
            unique:true,
            primaryKey:true
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