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
  .config(["$routeProvider", function ($routeProvider) {
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
  }]);

'use strict';

/**
 * @ngdoc function
 * @name ngGrailsWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngGrailsWebApp
 */
angular.module('ngGrailsWebApp')
  .controller('MainCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'SitePoint'
    ];
  }])
    .controller('TabsDemoCtrl', ["$scope", "$window", function ($scope, $window) {
        $scope.tabs = [
            { title:'Dynamic Title 1', content:'Dynamic content 1' },
            { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
        ];

        $scope.alertMe = function() {
            setTimeout(function() {
                $window.alert('You\'ve selected the alert tab!');
            });
        };
    }]);

'use strict';

/**
 * @ngdoc function
 * @name ngGrailsWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngGrailsWebApp
 */
angular.module('ngGrailsWebApp')
  .controller('AboutCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
