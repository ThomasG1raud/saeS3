module.exports = (sequelize,Sequelize) =>{
    const CategorieCompte = sequelize.define('categoriePrestation', {
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
    return CategorieCompte
}