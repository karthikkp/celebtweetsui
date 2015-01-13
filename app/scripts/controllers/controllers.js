'use strict';

angular.module('celebtweetsuiApp')
	.controller('MainCtrl', function ($scope, $http){
		$scope.tweets = [];
		var fullTweets = [];
		$http.get('http://localhost:3000/tweets').
			success(function (data, status, config, headers){
				fullTweets = angular.fromJson(data);
				$scope.tweets = fullTweets.slice(0,5);
				console.log($scope.tweets);
			}).
			error(function (data, status, cofig, headers){
				//alert("Error");
			});
		$scope.html = function(h){
			return h;
		}
		$scope.loadMore = function(){
			$scope.tweets = $scope.tweets.concat(fullTweets.slice($scope.tweets.length, $scope.tweets.length+5));
		}
	})
	.controller('CelebsCtrl', function ($scope, $http){
		$scope.celebs = [];
		$scope.actressess = [];
		$scope.directors = [];
		$scope.musicDirectors = [];
		$scope.others = [];
		$http.get('http://localhost:3000/celebs').
			success(function (data, status, config, headers){
				$scope.celebs = angular.fromJson(data);
				$scope.actors = $scope.celebs['actors'];
		$scope.actressess = $scope.celebs['actress'];
		$scope.directors = $scope.celebs['directors'];
		$scope.musicDirectors = $scope.celebs['musicDirector'];
		$scope.others = $scope.celebs['others'];
				console.log($scope.celebs);
			}).
			error(function (data, status, config, headers){

			});


		
	})
	.controller('CelebTweetsCtrl', function ($scope, $http, $routeParams){
		$scope.tweets = [];
		var fullTweets = [];
		$http.get('http://localhost:3000/celebs/' + $routeParams.name + '/tweets').
			success(function (data, status, config, headers){
				fullTweets = angular.fromJson(data);
				$scope.tweets = $scope.tweets.concat(fullTweets.slice($scope.tweets.length, $scope.tweets.length+1));
			}).
			error(function (data, status, config, headers){

			});
		$scope.html = function(h){
			return h;
		}
		$scope.loadMore = function(){
			$scope.tweets = $scope.tweets.concat(fullTweets.slice($scope.tweets.length, $scope.tweets.length+1));
		}
	})
	.controller('TweetCtrl', function ($scope, $routeParams){
		console.log($routeParams.name+ $routeParams.id);
		$scope.id = $routeParams.id;
		$scope.screenName = $routeParams.name;
	});