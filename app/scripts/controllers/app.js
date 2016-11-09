'use strict';

/**
 * @ngdoc function
 * @name uifabricApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the uifabricApp
 */
angular.module('uifabricApp')
  .controller('AppCtrl', function ($scope, $translate) {
    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
    };
  });
