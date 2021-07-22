require('dotenv').config();

module.exports = {
    "development": {
        "username": process.env.DB_NAME,
        "password": null,
        "database": process.env.DB,
        "host": process.env.DB_HOST,
        "dialect": process.env.TECH,
        "logging": false,
        "define": {
            "timestamps": false
        }
    },
    "test": {
        "username": process.env.DB_NAME,
        "password": null,
        "database": process.env.DB,
        "host": process.env.DB_HOST,
        "dialect": process.env.TECH,
        "logging": false,
        "define": {
            "timestamps": false
        }
    },
    "production": {
        "username": process.env.DB_NAME,
        "password": null,
        "database": process.env.DB,
        "host": process.env.DB_HOST,
        "dialect": process.env.TECH,
        "logging": false,
        "define": {
            "timestamps": false
        }
    }
}