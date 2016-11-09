'use strict';

angular.module('uifabricApp').config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'HOME': 'Home',
    'STACK': 'Stack',
    'PROJECTS': 'Projects',
    'ABOUT': 'About',
    'CONTACT': 'Contact'
  });
}]);
