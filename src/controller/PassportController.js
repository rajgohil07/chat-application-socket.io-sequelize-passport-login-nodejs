const passport = require('passport');
const passport_local = require('passport-local').Strategy;
const user_data = require('../models').user_data;
const common = require("../common");

var local_passport_login = () => {
    passport.use(new passport_local({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, (req, email, password, done) => {

        //to check email
        user_data.findOne({
            where: { email }
        }).then(async (email_data) => {
            if (email_data) {

                var password_check = await common.decrypt_psd(password, email_data.password);

                //if password is true
                if (password_check)
                    return done(null, email_data, null);
                else
                    return done(null, false, req.flash('wrong_psd', 'Password is incorrect!'));
            } else
                return done(null, false, req.flash('wrong_email', 'No match For email id!'));
        });
    }));
};

passport.serializeUser(function (email_data, done) {
    return done(null, email_data.id);
});

passport.deserializeUser(function (id, done) {
    user_data.findByPk(id).then(function (logger_data) {
        return done(null, logger_data)
    }).catch(function (err) {
        return done(err, null)
    });
});

module.exports = local_passport_login;