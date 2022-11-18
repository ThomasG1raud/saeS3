module.exports = (sequelize,Sequelize) =>{
    const categoriePrestation = sequelize.define('categoriePrestation', {
        idCategorie: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement:true,
            unique:true,
            primaryKey:true
        },

        libelleCategorie: {
            type: Sequelize.TEXT,
            allowNull: false
            // allowNull defaults to true
        }
    });
    return categoriePrestation
}