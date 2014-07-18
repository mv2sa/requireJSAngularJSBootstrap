'use strict';

define(['angular'], function (angular) {

		// Declare app level module which depends on filters, and services

		var app = angular.module('myApp', []);

		app.controller('something', function($scope) {
			$scope.marcos = "Nice!";
		});

		return app;
});