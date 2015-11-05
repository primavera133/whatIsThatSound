'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
    'ngRoute',
    'ngAudio',
    'myApp.controllers',
    'myApp.filters',
    'myApp.services',
    'myApp.directives'
]).
    config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/choose',
                controller: 'ChooseController'
            }).
            when('/play/:listId', {
                templateUrl: 'partials/play',
                controller: 'PlayController'
            }).
            when('/faq/', {
                templateUrl: 'partials/faq',
                controller: 'FaqController'
            }).
            otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    }]);
