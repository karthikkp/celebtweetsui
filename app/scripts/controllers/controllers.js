'use strict';

angular.module('celebtweetsuiApp')
	.controller('MainCtrl', function ($scope, $http){
		$scope.tweets = [];
		$http.get('http://localhost:3000/tweets').
			success(function (data, status, config, headers){
				$scope.tweets = angular.fromJson(data);
				console.log($scope.tweets);
			}).
			error(function (data, status, cofig, headers){
				//alert("Error");
			});
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
		
	});