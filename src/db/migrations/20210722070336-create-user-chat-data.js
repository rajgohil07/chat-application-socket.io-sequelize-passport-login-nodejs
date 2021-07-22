'use strict';
module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable('user_chat_data', {
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
        });
    },
    down: async (queryInterface, DataTypes) => {
        await queryInterface.dropTable('user_chat_data');
    }
};