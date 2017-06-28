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
    'pascalprecht.translate',
    'ui.bootstrap'
  ])
  .config(function ($urlRouterProvider, $translateProvider, $stateProvider) {

    // Important App Config goes here

    $urlRouterProvider.otherwise('/app/en/home'); //default route
    $translateProvider.preferredLanguage('en'); //default language

  });
