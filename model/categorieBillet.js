module.exports = (sequelize,Sequelize) =>{
    const categorieBillet = sequelize.define('categorieBillet', {
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
    }, {
        timestamps: false
    });
    return categorieBillet
}