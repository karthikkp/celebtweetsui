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
    'ngTouch',
    'socialLinks'
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
      .when('/celebs/:name', {
        templateUrl: 'views/main.html',
        controller: 'CelebTweetsCtrl'
      })
      .when('/celebs/:name/tweets/:id', {
        templateUrl: 'views/tweet.html',
        controller: 'TweetCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
