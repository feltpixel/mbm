'use strict';

angular.module('mbmApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/newreview', {
        templateUrl: 'app/newreview/newreview.html',
        controller: 'NewreviewCtrl'
      });
  });
