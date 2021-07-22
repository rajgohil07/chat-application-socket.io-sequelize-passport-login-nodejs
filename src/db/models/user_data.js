'use strict';
const { Model } = require('sequelize');
const { user_chat_data } = require("./user_chat_data");

module.exports = (sequelize, DataTypes) => {
    class user_data extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    user_data.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER(11)
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING(100),
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING(150),
            unique: true
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING(512)
        },
    }, {
        sequelize,
        modelName: 'user_data',
    });
    return user_data;
};