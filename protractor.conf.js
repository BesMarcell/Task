// Invoke 'strict' JavaScript mode
'use strict';

// Define the Protractor configuration
exports.config = {
	specs: ['public/*[!lib]*/tests/e2e/*.js'],
    capabilities: { 'browserName': 'chrome' },

    // This can be changed via the command line as:
    // --params.login.user 'ngrocks'
    params: {
        login: {
            user: '2',
            password: '2222222',
            firstName: '2',
            lastName: '2'
        }
    },

    jasmineNodeOpts: { showColors: true }

}