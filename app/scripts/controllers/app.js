'use strict';

/**
 * @ngdoc function
 * @name uifabricApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the uifabricApp
 */
angular.module('uifabricApp')
  .controller('AppCtrl', function ($state, $stateParams, $scope, $translate, $interval) {

    // Language Toggler & URL Param resolver
    var stateLang = $scope.currentLang = $stateParams.lang;
    if(stateLang === 'en') {$translate.use('en')}
    if(stateLang === 'de') {$translate.use('de')}
    $scope.changeLanguage = function (langKey) {
      $scope.currentLang = langKey;
      $translate.use(langKey);
      $state.go($state.current.name, { lang: langKey }, {reloadOnSearch: false });
    };

    $scope.homeKeywords = {
      de: ['flexible', 'dynamische', 'JavaScript', 'eigenständige', 'Cross-Platform', 'Web', 'App',
      'AngularJS', 'ReactJS', 'HTML', 'CSS / SASS', 'kustomisierte', 'responsive', 'Ionic'],
      en: ['flexible', 'dynamic', 'JavaScript', 'standalone', 'Cross-Platform', 'Web', 'App', 'AngularJS', 'ReactJS', 'HTML', 'CSS / SASS', 'custom', 'responsive', 'Ionic']
    };

    $scope.homeKeyword = [];
    $scope.homeKeyword.currentStep = 0;
    $scope.homeKeyword.name = $scope.homeKeywords[$scope.currentLang][$scope.homeKeyword.currentStep];

    $interval(function(){
      if($scope.homeKeyword.currentStep < $scope.homeKeywords[$scope.currentLang].length) {
        $scope.homeKeyword.currentStep += 1;
      }
      if($scope.homeKeyword.currentStep == $scope.homeKeywords[$scope.currentLang].length) {
        $scope.homeKeyword.currentStep = 0;
      }
      $scope.homeKeyword.name = $scope.homeKeywords[$scope.currentLang][$scope.homeKeyword.currentStep];
    }, 3000);





  });
