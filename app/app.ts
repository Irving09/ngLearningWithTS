/// <reference path="typings/angularjs/angular.d.ts" />

module app {
	'use strict';

	console.log('app module loaded');
	angular
		.module('app', [
			'ngRoute',
			'app.dashboard'
		]);
}