var config = require('./config');
var express = require('express');
var session = require('express-session');
module.exports = function() {
 var app = express();
 app.use(session({
 saveUninitialized: true,
 resave: true,
 secret: config.sessionSecret
 }));
 app.set('views', './app/views');
 app.set('view engine', 'ejs');
 require('../app/routes/index.server.routes.js')(app);
 app.use(express.static('./public'));
 return app;
};
