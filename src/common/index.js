const bcrypt = require('bcrypt');
const db = require('../models');
const { QueryTypes } = require('sequelize');
const row = db.sequelize;
const user_chat_data = db.user_chat_data;
const user_data = db.user_data;

exports.decrypt_psd = async (plain_psd, hashed_psd) => await bcrypt.compare(plain_psd, hashed_psd);

exports.getNameFromId = async (id) => await user_data.findOne({ where: { id }, attributes: ['name'] });

exports.insertChat = async (sender_id, receiever_id, message) => await user_chat_data.create({ sender_id: sender_id, receiever_id: receiever_id, message: message });

exports.displayChatData = async (sender, receiever) => await row.query("(SELECT * from user_chat_data WHERE sender_id=" + sender + " and receiever_id=" + receiever + " UNION SELECT * FROM user_chat_data WHERE sender_id=" + receiever + " and receiever_id=" + sender + ") ORDER by id", { type: QueryTypes.SELECT });
