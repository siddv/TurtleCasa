'use strict';

angular.module('turtle', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })

      .state('list', {
        url: '/list/:listName',
        templateUrl: 'app/product/list.html',
        controller: 'ListCtrl'
      })

      .state('basket', {
        url: '/basket/:listName',
        templateUrl: 'app/product/basket.html',
        controller: 'basketCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
