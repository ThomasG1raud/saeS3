module.exports = (sequelize,Sequelize) =>{
    const categorieBillet = sequelize.define('categorieBillet', {
        idCategorie: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement:true,
            primaryKey:true
        },

        libelleCategorie: {
            type: Sequelize.STRING,
            allowNull: false
            // allowNull defaults to true
        }
    });
    return categorieBillet
}