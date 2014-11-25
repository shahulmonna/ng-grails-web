'use strict';

/**
 * @ngdoc function
 * @name ngGrailsWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngGrailsWebApp
 */
angular.module('ngGrailsWebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
