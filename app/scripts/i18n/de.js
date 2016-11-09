'use strict';

/**
 * @ngdoc function
 * @name uifabricApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the uifabricApp
 */
angular.module('uifabricApp').config(['$translateProvider', function ($translateProvider) {

  $translateProvider.translations('de', {
    'HOME': 'Home',
    'STACK': 'Stack',
    'PROJECTS': 'Projekte',
    'ABOUT': 'Über',
    'CONTACT': 'Kontakt'
  });
}]);
