'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize.authenticate().then(() => {
  console.log('Connection established successfully!');
}).catch(err => {
  console.error('Unable to connect to the database due to :', err);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.user_data = require('./user_data')(sequelize, Sequelize);
db.user_chat_data = require('./user_chat_data')(sequelize, Sequelize);

// associations
db.user_data.hasMany(db.user_chat_data, { foreignKey: 'sender_id' });
db.user_data.hasMany(db.user_chat_data, { foreignKey: 'receiever_id' });
db.user_chat_data.belongsTo(db.user_data, { foreignKey: 'sender_id' });
db.user_chat_data.belongsTo(db.user_data, { foreignKey: 'receiever_id' });

module.exports = db;