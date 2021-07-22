'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

    class user_chat_data extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    user_chat_data.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER(11)
        },
        sender_id: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
            references: {
                model: 'user_data',
                key: 'id'
            }
        },
        receiever_id: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
            references: {
                model: 'user_data',
                key: 'id'
            }
        },
        message: {
            allowNull: false,
            type: DataTypes.STRING(512)
        },
    }, {
        sequelize,
        modelName: 'user_chat_data',
    });
    return user_chat_data;
};