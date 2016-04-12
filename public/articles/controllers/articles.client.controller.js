// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'articles' controller
angular.module('articles').controller('ArticlesController', ['$scope', '$routeParams', '$location', 'Authentication', 'Articles', 'Tags','WebShort',
    function($scope, $routeParams, $location, Authentication, Articles, Tags, WebShort) {
    	// Expose the Authentication service
        //$scope.buffer = "TEST drive";
        $scope.location = window.location.hash.slice(3);

        $scope.authentication = Authentication;
        $scope.arrTags = [];

        $scope.cancelEdit = function () {
            //$scope.current = {};
            $location.path("/articles");
        }

        $scope.addTag = function(tag){
            if (tag !==''){
                var yes = 0;
                $scope.arrTags.forEach(function(el){
                    if (el == tag) {yes = 1}
                })
                if (yes==0) {
                    $scope.arrTags.push(tag);
                    tags.value = '';
                }
            }

        };


        $scope.addTagA = function(tag){
            if (tag){
                var yes = 0;
                $scope.article.tags.forEach(function(el){
                    if (el == tag) {yes = 1}
                })
                if (yes==0){
                    $scope.article.tags.push(tag);
                    tags.value = '';
                }
            }

        };

        $scope.delTag = function(tag){
            $scope.arrTags.splice($scope.arrTags.indexOf(tag), 1);
        }

        $scope.delTagA = function(tag){
            $scope.article.tags.splice($scope.article.tags.indexOf(tag), 1);
        }

        function randWDn(n){  // [ 4 ] random words and digits unlimited
            var s ='';
            while(s.length < n)
                s += Math.random().toString(36).slice(2, 12);
            return s.substr(0, n);
        }

        $scope.hrefCount = function(article) {
            article.changed = 1;
            article.linkFollows = article.linkFollows+1;
            $scope.findByShort();
            /*$scope.article = Articles.get({
                articleId: $routeParams.articleId
            });
*/

           // alert(JSON.stringify(article));
            article.$update(function() {
                // If an article was updated successfully, redirect the user to the article's page
               $location.path('/' + article.websiteShort);
            }, function(errorResponse) {
                // Otherwise, present the user with the error message
                $scope.error = errorResponse.data.message;
            });



        };


        // Create a new controller method for creating new articles
        $scope.create = function() {
        	// Use the form fields to create a new article $resource object
            var article = new Articles({
                title: this.title,
                content: this.content,
                website: this.website,
                websiteShort: randWDn(7),
                tags: this.arrTags,
                linkFollows: 0
            });

            // Use the article '$save' method to send an appropriate POST request
            article.$save(function(response) {
            	// If an article was created successfully, redirect the user to the article's page 
                $location.path('articles/' + response._id);
            }, function(errorResponse) {
            	// Otherwise, present the user with the error message
                $scope.error = errorResponse.data.message;
            });
        };

        // Create a new controller method for retrieving a list of articles
        $scope.find = function() {
        	// Use the article 'query' method to send an appropriate GET request
            $scope.articles = Articles.query();
        };

        $scope.findByTag = function() {
            $scope.tagSel = Tags.query({
               tag: $routeParams.tag
            });
            //$scope.articles = Articles.query();
            //alert(JSON.stringify($scope.tagSel));
        };

        $scope.findByShort = function() {
            // Use the article 'get' method to send an appropriate GET request

            $scope.article = WebShort.query({
                websiteShort: $routeParams.websiteShort
            });
            /*$scope.$watch('article', function(newValue, oldValue) {
                //обновляет DOM новым значением(newValue)
                $scope.ttt = $scope.article;
                alert('123');
            });*/
            //window.location = $scope.article[0].website;
        };

        // Create a new controller method for retrieving a single article
        $scope.findOne = function() {
        	// Use the article 'get' method to send an appropriate GET request
            $scope.article = Articles.get({
                articleId: $routeParams.articleId
            });
            //alert(JSON.stringify($scope.article));
        };


        // Create a new controller method for updating a single article
        $scope.update = function() {
        	// Use the article '$update' method to send an appropriate PUT request
            $scope.article.$update(function() {
            	// If an article was updated successfully, redirect the user to the article's page 
                $location.path('articles/' + $scope.article._id);
            }, function(errorResponse) {
            	// Otherwise, present the user with the error message
                $scope.error = errorResponse.data.message;
            });
        };

        // Create a new controller method for deleting a single article
        $scope.delete = function(article) {
        	// If an article was sent to the method, delete it
            if (article) {
            	// Use the article '$remove' method to delete the article
                article.$remove(function() {
                	// Remove the article from the articles list
                    for (var i in $scope.articles) {
                        if ($scope.articles[i] === article) {
                            $scope.articles.splice(i, 1);
                        }
                    }
                });
            } else {
            	// Otherwise, use the article '$remove' method to delete the article
                $scope.article.$remove(function() {
                    $location.path('articles');
                });
            }
        };
    }
]);
