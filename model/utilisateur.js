module.exports = (sequelize,Sequelize) =>{
    const utilisateurs = sequelize.define('utilisateurs', {
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
    }, {
        timestamps: false
    });
    return utilisateurs
}