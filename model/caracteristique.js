module.exports = (sequelize,Sequelize) =>{
    const caracteristique = sequelize.define('caracteristique', {
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
    return caracteristique
}