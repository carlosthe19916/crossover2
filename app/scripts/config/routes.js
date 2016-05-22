'use strict';

// Setting up route
angular.module(ApplicationConfiguration.applicationModuleName).config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/app/home');

    // State routing
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .state('app', {
        abstract: true,
        url: '/app',
        templateUrl: '_layout.html',
        controller: 'LayoutController'
      })
      .state('app.home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })

      .state('not-found', {
        url: '/not-found',
        templateUrl: '404.html',
        data: {
          ignoreState: true,
          pageTitle: 'Not-Found'
        }
      })
      .state('bad-request', {
        url: '/bad-request',
        templateUrl: '400.html',
        data: {
          ignoreState: true,
          pageTitle: 'Bad-Request'
        }
      })
      .state('forbidden', {
        url: '/forbidden',
        templateUrl: '403.html',
        data: {
          ignoreState: true,
          pageTitle: 'Forbidden'
        }
      });

  }
]);
