module.exports = function (app) {

    const controller = require("../controller/controller");
    const LoginController = require('../controller/LoginController');
    const Passport = require('passport');
    const PassportController = require('../controller/PassportController');
    PassportController();

    //login
    app.get('/', LoginController.LoginRedirect);
    app.post('/login', Passport.authenticate("local", {
        successRedirect: '/chat',
        failureRedirect: '/',
        successFlash: true,
        failureFlash: true
    }));

    //main chat screen
    app.get('/chat', controller.checkSession, controller.GetChat);

    //file not found
    app.get('*', controller.fileNotFound);
};