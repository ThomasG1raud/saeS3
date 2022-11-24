module.exports = (sequelize,Sequelize) =>{
    const situe = sequelize.define('situe', {
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
    });
    return situe
}