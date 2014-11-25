'use strict';

/**
 * @ngdoc function
 * @name ngGrailsWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngGrailsWebApp
 */
angular.module('ngGrailsWebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
