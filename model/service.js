module.exports = (sequelize,Sequelize) =>{
    const service = sequelize.define('service', {
        idService: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement:true,
            unique:true,
            primaryKey:true
        },

        libelleService: {
            type: Sequelize.TEXT,
            allowNull: false
            // allowNull defaults to true
        }
    }, {
        timestamps: false
    });
    return service
}