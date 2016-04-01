'use strict';

describe('Controller: NewbreweryCtrl', function () {

  // load the controller's module
  beforeEach(module('mbmApp'));

  var NewbreweryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewbreweryCtrl = $controller('NewbreweryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
