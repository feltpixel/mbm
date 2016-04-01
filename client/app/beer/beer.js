'use strict';

angular.module('mbmApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/beer', {
        templateUrl: 'app/beer/beer.html',
        controller: 'BeerCtrl'
      });
  });
