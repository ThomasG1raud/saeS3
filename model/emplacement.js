module.exports = (sequelize,Sequelize) =>{
    const emplacement = sequelize.define('emplacement', {
        idEmplacement: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement:true,
            primaryKey:true
        },

        libelleEmplacement: {
            type: Sequelize.STRING,
            allowNull: false
            // allowNull defaults to true
        }
    });
    return emplacement
}