exports.render = function(req, res) {
    res.render('index', {
        title: 'be more simple',
        user: JSON.stringify(req.user)
    });
};