'use strict';

describe('Directive: scrollNav', function () {

  // load the directive's module
  beforeEach(module('uifabricApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<scroll-nav></scroll-nav>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the scrollNav directive');
  }));
});
