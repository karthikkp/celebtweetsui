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
	});