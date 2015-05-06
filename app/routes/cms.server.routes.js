module.exports = function(app){
        var index = require("../controllers/cms/index.server.controller");
	var users = require('../controllers/cms/users.server.controller'),
 	passport = require('passport');
        app.get('/admin',index.render);
        app.route('/admin/signin')
	.get(users.renderSignin)
 	.post(passport.authenticate('local', {
 	successRedirect: '/admin',
 	failureRedirect: '/admin/signin',
 	failureFlash: true
 	}));
 	app.get('/admin/signout', users.signout);
        
}
