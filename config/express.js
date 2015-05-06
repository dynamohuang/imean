var config = require('./config');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');
module.exports = function() {
 var app = express();
 app.use(session({
 saveUninitialized: true,
 resave: true,
 secret: config.sessionSecret
 }));
 app.set('views', './app/views');
 app.set('view engine', 'ejs');
 app.use(flash());
 app.use(passport.initialize());
 app.use(passport.session());
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
 extended: true
 })) ;
 require('../app/routes/index.server.routes.js')(app);
 require('../app/routes/users.server.routes.js')(app);
 require('../app/routes/cms.server.routes.js')(app);
 app.use(express.static('./public'));
 return app;
};
