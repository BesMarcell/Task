var mainApplicationModuleName = 'mean';
var mainApplicationModule = angular.module(mainApplicationModuleName,
        ['ngResource','ngRoute','users', 'example']);
mainApplicationModule.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);
angular.element(document).ready(function() {
    angular.bootstrap(document, [mainApplicationModuleName]);
});