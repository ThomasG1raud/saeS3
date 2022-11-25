module.exports = (sequelize,Sequelize) =>{
    const modifys = sequelize.define('modifys', {
        heureVisite: {
            type: Sequelize.DATE,
            allowNull: false,
            primaryKey:true
        }
    }, {
        timestamps: false
    });
    return modifys
}