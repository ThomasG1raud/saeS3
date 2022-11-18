module.exports = (sequelize,Sequelize) =>{
    const CategorieCompte = sequelize.define('categoriePrestation', {
        siren: {
            type: Sequelize.INTERGER,
            allowNull: false,
            unique:true,
            primaryKey:true
        },

        nomEntreprise: {
            type: Sequelize.TEXT,
            allowNull: false
            // allowNull defaults to true
        }
    });
    return CategorieCompte
}