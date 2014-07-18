'use strict';

define(['angular', 'uiBootstrap'], function (angular) {

	// Declare app level module which depends on filters, and services

	var app = angular.module('myApp', ['ui.bootstrap']);

	app.controller('something', function($scope) {
		$scope.marcos = "Nice!";
	});

	app.controller('DatepickerDemoCtrl', function($scope) {
	  $scope.today = function() {
	    $scope.dt = new Date();
	  };
	  $scope.today();

	  $scope.clear = function () {
	    $scope.dt = null;
	  };

	  // Disable weekend selection
	  $scope.disabled = function(date, mode) {
	    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
	  };

	  $scope.toggleMin = function() {
	    $scope.minDate = $scope.minDate ? null : new Date();
	  };
	  $scope.toggleMin();

	  $scope.open = function($event) {
	    $event.preventDefault();
	    $event.stopPropagation();

	    $scope.opened = true;
	  };

	  $scope.dateOptions = {
	    formatYear: 'yy',
	    startingDay: 1
	  };

	  $scope.initDate = new Date('2016-15-20');
	  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	  $scope.format = $scope.formats[0];
	});

	app.controller('CarouselDemoCtrl', function($scope) {
		$scope.myInterval = 5000;
		var slides = $scope.slides = [];
		$scope.addSlide = function() {
			var newWidth = 600 + slides.length;
			slides.push({
				image: 'http://placekitten.com/' + newWidth + '/300',
				text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
			    ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
			});
		};
		for (var i=0; i<4; i++) {
			$scope.addSlide();
		}
	});

	app.controller('ProgressDemoCtrl', function($scope) {
	  $scope.max = 200;

	  $scope.random = function() {
	    var value = Math.floor((Math.random() * 100) + 1);
	    var type;

	    if (value < 25) {
	      type = 'success';
	    } else if (value < 50) {
	      type = 'info';
	    } else if (value < 75) {
	      type = 'warning';
	    } else {
	      type = 'danger';
	    }

	    $scope.showWarning = (type === 'danger' || type === 'warning');

	    $scope.dynamic = value;
	    $scope.type = type;
	  };
	  $scope.random();

	  $scope.randomStacked = function() {
	    $scope.stacked = [];
	    var types = ['success', 'info', 'warning', 'danger'];

	    for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
	        var index = Math.floor((Math.random() * 4));
	        $scope.stacked.push({
	          value: Math.floor((Math.random() * 30) + 1),
	          type: types[index]
	        });
	    }
	  };
	  $scope.randomStacked();
	});

	return app;
});