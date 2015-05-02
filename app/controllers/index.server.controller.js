exports.render = function(req, res) {
 res.render('index', {
 title: 'Hello imean',
 username: req.user ? req.user.username : ''
 });
};

