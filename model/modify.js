module.exports = (sequelize,Sequelize) =>{
    const modify = sequelize.define('modify', {
        heureVisite: {
            type: Sequelize.DATE,
            allowNull: false,
            primaryKey:true
        }
    }, {
        timestamps: false
    });
    return modify
}