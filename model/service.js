module.exports = (sequelize,Sequelize) =>{
    const service = sequelize.define('service', {
        idService: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement:true,
            primaryKey:true
        },

        libelleService: {
            type: Sequelize.STRING,
            allowNull: false
            // allowNull defaults to true
        }
    });
    return service
}