'use strict';

/**
 * @ngdoc function
 * @name celebtweetsuiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the celebtweetsuiApp
 */
angular.module('celebtweetsuiApp', ['socialLinks'])
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
