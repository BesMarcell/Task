'use strict';

// Configure the 'articles' module routes
angular.module('articles').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/articles', {
			templateUrl: 'articles/views/list-articles.client.view.html'
		}).
			when('/chat', {
				templateUrl: 'chat/views/chat.client.view.html'
			}).
		when('/articles/create', {
			templateUrl: 'articles/views/create-article.client.view.html'
		}).
		when('/articles/:articleId', {
			templateUrl: 'articles/views/view-article.client.view.html'
		}).
		when('/articles/:articleId/edit', {
			templateUrl: 'articles/views/edit-article.client.view.html'
		}).
			when('/:websiteShort', {
				templateUrl: 'articles/views/shortweb.client.view.html'
			}).
			when('/tags/:tag', {
				templateUrl: 'articles/views/list-tags.client.view.html'
			});
	}
]); 