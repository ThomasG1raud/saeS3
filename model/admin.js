module.exports = (sequelize,Sequelize) =>{
    const admin = sequelize.define('admin', {
        idAdmin: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement:true,
            primaryKey:true
        },

        texteAccueil: {
            type: Sequelize.TEXT,
            allowNull: false
            // allowNull defaults to true
        },

        imageAccueil: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return admin
}