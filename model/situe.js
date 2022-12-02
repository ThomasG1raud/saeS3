module.exports = (sequelize,Sequelize) =>{
    const situes = sequelize.define('situes', {
        horaireDebut: {
            type: Sequelize.DATE,
            allowNull: false,
            primaryKey:true
        },

        horaireFin: {
            type: Sequelize.DATE,
            allowNull: false,
            primaryKey: true
        }
    }, {
        timestamps: false
    });
    return situes
}