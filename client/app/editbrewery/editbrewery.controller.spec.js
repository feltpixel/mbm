'use strict';

describe('Controller: EditbreweryCtrl', function () {

  // load the controller's module
  beforeEach(module('mbmApp'));

  var EditbreweryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditbreweryCtrl = $controller('EditbreweryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
