'use strict';

/**
 * @ngdoc overview
 * @name ngGrailsWebApp
 * @description
 * # ngGrailsWebApp
 *
 * Main module of the application.
 */
angular
  .module('ngGrailsWebApp', ['ui.bootstrap',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
