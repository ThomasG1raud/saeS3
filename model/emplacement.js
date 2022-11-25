module.exports = (sequelize,Sequelize) =>{
    const emplacement = sequelize.define('emplacement', {
        idEmplacement: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement:true,
            unique:true,
            primaryKey:true
        },

        libelleEmplacement: {
            type: Sequelize.TEXT,
            allowNull: false
            // allowNull defaults to true
        }
    }, {
        timestamps: false
    });

    return emplacement
}