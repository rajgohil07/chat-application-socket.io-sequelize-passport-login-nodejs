module.exports = function (sequelize, Sequelize) {
    const user_chat_data = sequelize.define('user_chat_data', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER(11)
        },
        sender_id: {
            allowNull: false,
            type: Sequelize.INTEGER(11)
        },
        receiever_id: {
            allowNull: false,
            type: Sequelize.INTEGER(11)
        },
        message: {
            allowNull: false,
            type: Sequelize.STRING(512)
        },
    },
        { timestamps: false, }
    );
    return user_chat_data;
};