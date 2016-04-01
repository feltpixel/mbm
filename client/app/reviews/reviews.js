'use strict';

angular.module('mbmApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/reviews', {
        templateUrl: 'app/reviews/reviews.html',
        controller: 'ReviewsCtrl'
      });
  });
