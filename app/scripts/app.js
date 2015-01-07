'use strict';

/**
 * @ngdoc overview
 * @name celebtweetsuiApp
 * @description
 * # celebtweetsuiApp
 *
 * Main module of the application.
 */
angular
  .module('celebtweetsuiApp', [
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
      .when('/celebs', {
        templateUrl: 'views/celebs.html',
        controller: 'CelebsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
