angular.module('articles').factory('Articles', ['$resource',
    function($resource) {
        return $resource('api/articles/:articleId', {
            articleId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }])
    .factory('Tags', ['$resource',
        function($resource) {
            return $resource('api/tags/:tag', {
                tag: '@tag'
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }])
    .factory('WebShort', ['$resource',
        function($resource) {
            return $resource('api/:websiteShort', {
                websiteShort: '@websiteShort'
            });
        }])
;
