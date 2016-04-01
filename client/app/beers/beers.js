'use strict';

angular.module('mbmApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/beers', {
        templateUrl: 'app/beers/beers.html',
        controller: 'BeersCtrl'
      });
  });
