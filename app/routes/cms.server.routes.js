module.exports = function(app){
        var index = require("../controllers/cms/index.server.controller");
        app.get('/admin',index.render);
}
