module.exports = (sequelize,Sequelize) =>{
    const caracteristiques = sequelize.define('caracteristiques', {
        idCaracteristique: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement:true,
            unique:true,
            primaryKey:true
        },

        libelleCaracteristique: {
            type: Sequelize.TEXT,
            allowNull: false
            // allowNull defaults to true
        }
    }, {
        timestamps: false
    });
    return caracteristiques
}