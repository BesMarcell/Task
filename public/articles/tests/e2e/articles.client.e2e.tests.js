// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'articles' module E2E test suite
describe('Articles E2E Tests:', function() {

    // Test the new article page
    describe('New Article Page', function() {
        beforeEach(module('mean'));
        it('Should not be able to create a new article', function() {
            // Load the new article page
            browser.get('http://localhost:3000/#!/articles/create');

            // Get the submit button
            element(by.css('input[type=submit]')).click();

            // Get the error message element
            element(by.binding('error')).getText().then(function(errorText) {
                // Check the error message text
                expect(errorText).toBe('User is not logged in');
            });
        });
    });

    describe('List of Articles will load', function() {
        beforeEach(module('mean'));
        it('Should not be able to create a new article', function() {
            // Load the new article page
            browser.get('http://localhost:3000/#!/articles/');
            var AllArticles = element.all(by.repeater('article in articles |filter:search|itemsPerPage:4|orderBy:sortKey:reverse'));
            expect(AllArticles.count()).toBe(4);

        });
    });
/* Testing need every time to change user details
    describe('signUp page', function() {

        var params = browser.params;

        it('should signUp successfully', function() {
            browser.get('http://localhost:3000/signup');
            element( by.model('fname') ).sendKeys( 'UserTestFName1' );
            element( by.model('lname') ).sendKeys( 'UserTestLName1' );
            element( by.model('email') ).sendKeys( 'UserTestEmail1@mail.ru' );
            element( by.model('username') ).sendKeys( 'UserTestUserName1' );
            element( by.model('password') ).sendKeys( 'UserTestPassword1' );
            element( by.id('SignUp') ).click();
            browser.get('http://localhost:3000/');
            expect( element(by.binding('authentication.user.fullName') ).getText() ).toEqual('UserTestFName1 UserTestLName1');
            element( by.id('SignOut') ).click();
        });

    });
*/
    describe('login page', function() {
        beforeEach(module('mean'));
        var params = browser.params;

        it('should login successfully', function() {
            browser.get('http://localhost:3000/signin');
            element( by.model('username') ).sendKeys( params.login.user );
            element( by.model('password') ).sendKeys( params.login.password );
            element( by.id('SignIn') ).click();
            browser.get('http://localhost:3000/');
            expect( element(by.binding('authentication.user.fullName') ).getText() ).toEqual('2 2');
        });

    });

    /*
    describe('New Article Page success',function(){
        //var params = browser.params;
        var scope, ctrl;

          beforeEach(module('mean'));
          beforeEach(inject(function($controller) {
            scope = {};
            ctrl= $controller('ArticlesController', {$scope:scope});
        }));

        it('Should be able to create a new article', function() {


            browser.get('http://localhost:3000/#!/articles/create');
            element( by.model('title') ).sendKeys('title_123');
            element( by.model('website') ).sendKeys('www.google.com');
            element( by.model('content') ).sendKeys('content_123');
            scope.arrTags = ["1", "2", "000"];
            element( by.id('CreateArticle') ).click();

        });
    });
*/

});