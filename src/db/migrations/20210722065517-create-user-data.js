'use strict';
module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable('user_data', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER(11)
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING(100),
            }, email: {
                allowNull: false,
                type: DataTypes.STRING(150),
                unique: true
            },
            password: {
                allowNull: false,
                type: DataTypes.STRING(512)
            },
        });
    },
    down: async (queryInterface, DataTypes) => {
        await queryInterface.dropTable('user_data');
    }
};