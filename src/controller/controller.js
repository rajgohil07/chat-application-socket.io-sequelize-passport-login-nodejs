exports.GetChatHome = (req, res) => res.render('chat_screen_home', { name: req.user.name });

exports.GetChat = (req, res) => res.render('chat_screen', { name: req.user.name, id: req.user.id });

exports.checkSession = (req, res, cb) => !req.isAuthenticated() ? res.redirect('/') : cb();

exports.fileNotFound = (req, res) => res.render('404');