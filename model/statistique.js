module.exports = (sequelize,Sequelize) =>{
    const statistiques = sequelize.define('statistiques', {
        idStatistique: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement:true,
            unique:true,
            primaryKey:true
        },

        libelleStatistique: {
            type: Sequelize.TEXT,
            allowNull: false
            // allowNull defaults to true
        },

        valeur: {
            type: Sequelize.NUMERIC,
            allowNull: false
        }
    }, {
        timestamps: false
    });
    return statistiques
}