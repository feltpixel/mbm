'use strict';

angular.module('mbmApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/editbrewery', {
        templateUrl: 'app/editbrewery/editbrewery.html',
        controller: 'EditbreweryCtrl'
      });
  });
