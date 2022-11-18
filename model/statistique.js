module.exports = (sequelize,Sequelize) =>{
    const statistique = sequelize.define('statistique', {
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
    });
    return statistique
}