/// <reference path="../typings/angularjs/angular.d.ts" />

module dashboardController {
	'use strict';

	console.log('dashboard controller created');
	angular
		.module('app.dashboard')
		.controller('dashboardController', DashboardController);

	function DashboardController() {
		var dashboardCtrl = this;
		dashboardCtrl.name = 'Dashboard Controller';
	}
}