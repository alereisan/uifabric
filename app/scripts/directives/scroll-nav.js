'use strict';

/**
 * @ngdoc directive
 * @name uifabricApp.directive:scrollNav
 * @description
 * # scrollNav
 */
angular.module('uifabricApp')
  .directive('scrollNav', function ($window) {
    return function(scope, element, attrs) {
      angular.element($window).bind("scroll", function() {
        if (this.pageYOffset >= 50) {
          scope.scrollDown = true;
        } else {
          scope.scrollDown = false;
        }
        scope.$apply();
      });
    };
  });
