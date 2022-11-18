module.exports = (sequelize,Sequelize) =>{
    const billet = sequelize.define('billet', {
        idBillet: {
            type: Sequelize.INTEGER,
            allowNull: true,
            autoIncrement:true,
            unique:true,
            primaryKey:true
        },

        prix: {
            type: Sequelize.DOUBLE,
            allowNull: false
            // allowNull defaults to true
        },
    });
    return billet
}