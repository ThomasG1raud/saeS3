module.exports = (sequelize,Sequelize) =>{
    const modifie = sequelize.define('modifie', {
        heureVisite: {
            type: Sequelize.DATE,
            allowNull: false,
            primaryKey:true
        }
    }, {
        timestamps: false
    });
    return modifie
}