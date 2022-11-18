module.exports = (sequelize,Sequelize) =>{
    const besoin = sequelize.define('besoin', {
        idBesoin: {
            type: Sequelize.INTEGER,
            allowNull: true,
            autoIncrement:true,
            primaryKey:true
        },

        libelleBesoin: {
            type: Sequelize.TEXT,
            allowNull: false
            // allowNull defaults to true
        },
    });
    return besoin
}