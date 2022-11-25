module.exports = (sequelize,Sequelize) =>{
    const categorieBillets = sequelize.define('categorieBillets', {
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
    return categorieBillets
}