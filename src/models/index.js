const Sequelize = require('sequelize');
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB, process.env.DB_NAME, '', {
    host: process.env.DB_HOST,
    dialect: process.env.TECH,
    operatorsAliases: 0,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }

});

sequelize.authenticate().then(() => {
    console.log('Connection established successfully!');
}).catch(err => {
    console.error('Unable to connect to the database due to :', err);
});

const db = {};

//storing data to db object
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user_data = require('./user_data')(sequelize, Sequelize);
db.user_chat_data = require('./user_chat_data')(sequelize, Sequelize);

// associations
db.user_data.hasMany(db.user_chat_data, { foreignKey: 'sender_id' });
db.user_data.hasMany(db.user_chat_data, { foreignKey: 'receiever_id' });
db.user_chat_data.belongsTo(db.user_data, { foreignKey: 'sender_id' });
db.user_chat_data.belongsTo(db.user_data, { foreignKey: 'receiever_id' });

//export db object
module.exports = db;