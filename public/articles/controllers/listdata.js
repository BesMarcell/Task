// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'articles' controller
angular.module('articles').controller('listData',
    function($scope) {
        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        }
    });
