// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var users = require('../../app/controllers/users.server.controller'),
	articles = require('../../app/controllers/articles.server.controller');

// Define the routes module' method
module.exports = function(app) {
	// Set up the 'articles' base routes 
	app.route('/api/articles')
	   .get(articles.list)
	   .post(users.requiresLogin, articles.create);
	
	// Set up the 'articles' parameterized routes
	app.route('/api/articles/:articleId')
	   .get(articles.read)
	   .put(articles.update)
            //.put(users.requiresLogin, articles.hasAuthorization, articles.update)
	   .delete(users.requiresLogin, articles.hasAuthorization, articles.delete);

    //app.put(articles.update);

	app.route('/api/tags/:tag')
		.get(articles.readTag);

	app.route('/api/:websiteShort')
		.get(articles.readWebsiteShort);

	// Set up the 'articleId' parameter middleware   
	app.param('articleId', articles.articleByID);
	app.param('tag', articles.findByTag);
	app.param('websiteShort', articles.findByWebsiteShort);
};