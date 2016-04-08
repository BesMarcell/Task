angular.module('example').controller('ExampleController', ['$scope',
    'Authentication','$location',
    function($scope, Authentication, $location) {
        $scope.authentication = Authentication;
        $scope.cancel = function(){
            $location.path('/');
        };
    }
]);