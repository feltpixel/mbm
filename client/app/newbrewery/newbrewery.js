'use strict';

angular.module('mbmApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/newbrewery', {
        templateUrl: 'app/newbrewery/newbrewery.html',
        controller: 'NewbreweryCtrl'
      });
  });
