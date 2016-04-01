'use strict';

angular.module('mbmApp.auth', [
  'mbmApp.constants',
  'mbmApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
