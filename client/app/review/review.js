'use strict';

angular.module('mbmApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/review', {
        templateUrl: 'app/review/review.html',
        controller: 'ReviewCtrl'
      });
  });
