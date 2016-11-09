'use strict';

angular.module('uifabricApp').config(function ($stateProvider) {
  $stateProvider
    .state('app', {
      url: '/app/:lang',
      templateUrl: 'views/app.html',
      controller: 'AppCtrl'
    })
    .state('app.home', {
      url: '/home',
      templateUrl: 'views/home.html'
    })
    .state('app.stack', {
      url: '/stack',
      templateUrl: 'views/stack.html'
    })
    .state('app.projects', {
      url: '/projects',
      templateUrl: 'views/projects.html'
    })
    .state('app.about', {
      url: '/about',
      templateUrl: 'views/about.html'
    })
    .state('app.contact', {
      url: '/contact',
      templateUrl: 'views/contact.html'
    });
});
