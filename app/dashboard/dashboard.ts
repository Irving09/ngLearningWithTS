/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />

module dashboard {
	'use strict';

	console.log('dashboard module loaded');
	angular
		.module('app.dashboard', ['ngRoute'])
		.config(['$routeProvider', function($routeProvider: ng.route.IRouteProvider) {
			$routeProvider.when('/', {
				templateUrl: './dashboard.html',
				controller: 'dashboardController',
				controllerAs: 'dashboardCtrl'
			});
		}]);
}