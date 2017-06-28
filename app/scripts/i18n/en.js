'use strict';

angular.module('uifabricApp').config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'HOME': 'Home',
    'STACK': 'Stack',
    'PORTFOLIO': 'Portfolio',
    'ABOUT': 'About',
    'CONTACT': 'Contact',
    'WE_BUILD': 'We develope',
    'USER_INTERFACES': 'User Interfaces',
    'SEND_BRIEFING': 'Send Briefing',
    'PROCESS': 'Development Process'
  });
}]);
