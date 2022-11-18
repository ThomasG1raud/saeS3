module.exports = (sequelize,Sequelize) =>{
    const categoriePrestation = sequelize.define('categoriePrestation', {
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
    return categoriePrestation
}