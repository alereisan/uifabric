'use strict';

angular.module('uifabricApp').config(['$translateProvider', function ($translateProvider) {

  $translateProvider.translations('de', {
    'HOME': 'Home',
    'STACK': 'Stack',
    'PORTFOLIO': 'Portfolio',
    'ABOUT': 'Über',
    'CONTACT': 'Kontakt',
    'WE_BUILD': 'Wir entwickeln',
    'USER_INTERFACES': 'Benutzeroberflächen',
    'SEND_BRIEFING': 'Briefing senden',
    'PROCESS': 'Entwicklungsprozess'
  });
}]);
