'use strict';

/**
 * @ngdoc overview
 * @name uifabricApp
 * @description
 * # uifabricApp
 *
 * Main module of the application.
 */
angular
  .module('uifabricApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'pascalprecht.translate'
  ])
  .config(function ($urlRouterProvider, $translateProvider) {

    // Important App Config goes here

    $urlRouterProvider.otherwise('/app/en'); //default route
    $translateProvider.preferredLanguage('de'); //default language

  });
