/// <reference path="../typings/angularjs/angular.d.ts" />
var dashboard;
(function (dashboard) {
    'use strict';
    console.log('dashboard module loaded');
    angular
        .module('app.dashboard', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'dashboard/dashboard.html',
                controller: 'dashboardController',
                controllerAs: 'dashboardCtrl'
            });
        }]);
})(dashboard || (dashboard = {}));
