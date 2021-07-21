module.exports = function (sequelize, Sequelize) {
    const user_data = sequelize.define('user_data', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER(11)
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING(100),
        },
        email: {
            allowNull: false,
            type: Sequelize.STRING(150),
            unique: true
        },
        password: {
            allowNull: false,
            type: Sequelize.STRING(512)
        },
    },
        { timestamps: false, }
    );
    return user_data;
};