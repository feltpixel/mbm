'use strict';

describe('Controller: NewreviewCtrl', function () {

  // load the controller's module
  beforeEach(module('mbmApp'));

  var NewreviewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewreviewCtrl = $controller('NewreviewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
