module.exports = (sequelize,Sequelize) =>{
    const entreprises = sequelize.define('entreprises', {
        siren: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique:true,
            primaryKey:true
        },

        nomEntreprise: {
            type: Sequelize.TEXT,
            allowNull: false
            // allowNull defaults to true
        }
    }, {
        timestamps: false
    });
    return entreprises
}