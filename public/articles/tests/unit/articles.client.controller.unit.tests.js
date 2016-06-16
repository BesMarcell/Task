/*
describe('Testing Articles Controller', function() {
	var $scope, ArticlesController;
	beforeEach(module('mean'));
	beforeEach(module('articles'));
	beforeEach(inject(function(_$rootScope_, _$controller_){
		$scope = _$rootScope_.$new();
		ArticlesController = _$controller_('ArticlesController',{
			$scope: $scope});
	}));


	it('Should be registered', function() {
		expect(ArticlesController).toBeDefined();
	});

});

*/
describe('Testing Articles Controller', function() {
	var _scope, ArticlesController;
	beforeEach(function() {
		module('mean');
		jasmine.addMatchers({
			toEqualData: function(util, customEqualityTesters) {
				return {
					compare: function(actual, expected) {
						return {
							pass: angular.equals(actual, expected)
						};
					}
				};
			}
		});
		inject(function($rootScope, $controller) {
			_scope = $rootScope.$new();
			ArticlesController = $controller('ArticlesController', {
				$scope: _scope
			});
		});
	});

	it('Should have a find method that uses $resource to retrieve a list of articles', inject(function(Articles) {
	inject(function($httpBackend) {
		var sampleArticle = new Articles({
			title: 'An Article about MEAN',
			content: 'MEAN rocks!'
		});
		var sampleArticles = [sampleArticle];
		$httpBackend.expectGET('api/articles').respond(sampleArticles);
		_scope.find();
		$httpBackend.flush();
		expect(_scope.articles).toEqualData(sampleArticles);
		expect(_scope.articles.length).toEqual(1);

	});
}));

it('Should have a findOne method that uses $resource to retreive a single of article', inject(function(Articles) {
inject(function($httpBackend, $routeParams) {
	var sampleArticle = new Articles({
		title: 'An Article about MEAN',
		content: 'MEAN rocks!'
	});
	$routeParams.articleId = 'abcdef123456789012345678';
	$httpBackend.whenGET(/api\/articles\/([0-9a-fA-F]{24})$/).
		respond(sampleArticle);
	_scope.findOne();
	$httpBackend.flush();
	expect(_scope.article).toEqualData(sampleArticle);

});
}));

	it('Should create a new article', inject(function(Articles) {
		inject(function($httpBackend, $routeParams) {
			var article = new Articles({
				title: 'title',
				content: 'content',
				website: 'web',
				websiteShort: 'f4ew21',
				tags: ['1','one'],
				linkFollows: 0
			});
			$routeParams.articleId = 'abcdef123456789012345678';

			$httpBackend
				.when('POST', 'api/articles/abcdef123456789012345678', article).respond({website: 'web'});


//			$httpBackend.whenPOST(/api\/articles\/([0-9a-fA-F]{24})$/).respond(article);
			_scope.create();
			$httpBackend.flush();

			//$httpBackend.expectGET('api/articles').respond(_scope.articles);
			//_scope.find();
			//$httpBackend.flush();

			expect(_scope.articles.length).toEqual(1);
		});
	}));


});

describe('Testing Articles Controller', function() {
	var _scope, ArticlesController;
	beforeEach(function() {
		module('mean');
		inject(function($rootScope, $controller) {
			_scope = $rootScope.$new();
			ArticlesController = $controller('ArticlesController', {
				$scope: _scope
			});
		});
	});
	it('Should be registered', function() {
		expect(ArticlesController).toBeDefined();
	});
	it('Should include CRUD methods', function() {
		expect(_scope.find).toBeDefined();
		expect(_scope.findOne).toBeDefined();
		expect(_scope.create).toBeDefined();
		expect(_scope.delete).toBeDefined();
		expect(_scope.update).toBeDefined();
	});
});


describe('Testing Articles Routing', function() {
	beforeEach(module('mean'));
	it('Should map a "list" route', function() {
		inject(function($route) {
			expect($route.routes['/articles'].templateUrl).
				toEqual('articles/views/list-articles.client.view.html');
		});
	});
});