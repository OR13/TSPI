'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('TSPI'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should define nickname string', inject(function($controller) {
    expect(scope.nickname).toBeUndefined();

    $controller('InterviewController', {
      $scope: scope
    });

    expect(angular.isString(scope.nickname)).toBeTruthy();

  }));
});
