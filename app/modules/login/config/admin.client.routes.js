'use strict';

// Setting up route
angular.module('login').config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {


		$stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'modules/login/views/login.html',
        controller: 'LoginController'
      });

	}
]);
