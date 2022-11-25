module.exports = (sequelize,Sequelize) =>{
    const billets = sequelize.define('billetq', {
        idBillet: {
            type: Sequelize.INTEGER,
            allowNull: true,
            autoIncrement:true,
            unique:true,
            primaryKey:true
        },

        prix: {
            type: Sequelize.DOUBLE,
            allowNull: false
            // allowNull defaults to true
        },
    }, {
        timestamps: false
    });
    return billets
}