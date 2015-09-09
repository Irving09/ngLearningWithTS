/// <reference path="typings/angularjs/angular.d.ts" />
var app;
(function (app) {
    'use strict';
    console.log('app module loaded');
    angular
        .module('app', [
        'ngRoute',
        'app.dashboard'
    ]);
})(app || (app = {}));
