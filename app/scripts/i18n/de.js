'use strict';

angular.module('uifabricApp').config(['$translateProvider', function ($translateProvider) {

  $translateProvider.translations('de', {
    'HOME': 'Home',
    'STACK': 'Stack',
    'PROJECTS': 'Projekte',
    'ABOUT': 'Über',
    'CONTACT': 'Kontakt'
  });
}]);
