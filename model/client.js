module.exports = (sequelize,Sequelize) =>{
    const client = sequelize.define('client', {
        idClient: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement:true,
            primaryKey:true
        },

        nom: {
            type: Sequelize.STRING,
            allowNull: false
            // allowNull defaults to true
        },

        age: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
    return client
}