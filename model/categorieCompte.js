module.exports = (sequelize,Sequelize) =>{
    const CategorieComptes = sequelize.define('CategorieComptes', {
        typeCompte: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement:true,
            unique:true,
            primaryKey:true
        },

        libelleCompte: {
            type: Sequelize.TEXT,
            allowNull: false
            // allowNull defaults to true
        }
    }, {
        timestamps: false
    });
    return CategorieComptes
}