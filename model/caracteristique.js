module.exports = (sequelize,Sequelize) =>{
    const caracteristique = sequelize.define('caracteristique', {
        idCaracteristique: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement:true,
            primaryKey:true
        },

        libelleCaracteristique: {
            type: Sequelize.TEXT,
            allowNull: false
            // allowNull defaults to true
        }
    });
    return caracteristique
}