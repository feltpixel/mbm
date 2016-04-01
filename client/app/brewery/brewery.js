'use strict';

angular.module('mbmApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/brewery', {
        templateUrl: 'app/brewery/brewery.html',
        controller: 'BreweryCtrl'
      });
  });
