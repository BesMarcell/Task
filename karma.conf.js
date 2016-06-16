// Invoke 'strict' JavaScript mode
'use strict';

// Define the Protractor configuration
module.exports = function(config) {
	config.set({
		// The test framework to use
		frameworks: ['jasmine'],
		// The files load
		files: [
			'public/lib/angular/angular.js',
			'public/lib/angular-resource/angular-resource.js',
			'public/lib/angular-route/angular-route.js',
			'public/lib/angular-mocks/angular-mocks.js',
			'public/lib/angularUtils-pagination/dirPagination.js',
			'public/application.js',
			'public/*[!lib]*/*.js',
			'public/*[!lib]*/*[!tests]*/*.js',
			'public/*[!lib]*/tests/unit/*.js'
		],
		preprocessors: {
			'src/frontend/**/!(*spec).js': 'coverage'
		},
		// The reporter to use
		reporters: ['progress', 'coverage'],
		// The browsers to run
		browsers: ['Chrome'],
		// Test timeout
		captureTimeout: 60000,
		// Should Karma run once
		singleRun: true
	});
};