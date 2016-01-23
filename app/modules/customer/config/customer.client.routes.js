'use strict';

// Setting up route
angular.module('customer').config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('customer', {
				url: '/customers',
				template: '<div ui-view></div>',
				ncyBreadcrumb: {
					skip: true // Never display this state in breadcrumb.
				}
			})
			.state('customer.search', {
				url: '/search',
				templateUrl: 'modules/customer/views/search.html',
        controller: 'Customer.SearchController',
				ncyBreadcrumb: {
					label: 'Home'
				}
			})
      .state('customer.detail', {
        url: '/:customerId/detail',
        templateUrl: 'modules/customer/views/detail.html',
        controller: 'Customer.DetailController',
        ncyBreadcrumb: {
          label: 'Home'
        }
      })
      .state('customer.detail.dashboard', {
        url: '/dashboard',
        templateUrl: 'modules/customer/views/detail_dashboard.html',
        controller: 'Customer.Detail.DashboardController',
        ncyBreadcrumb: {
          label: 'Home'
        }
      })
      .state('customer.detail.notes', {
        url: '/notes',
        templateUrl: 'modules/customer/views/detail_notes.html',
        controller: 'Customer.Detail.NotesController',
        ncyBreadcrumb: {
          label: 'Home'
        }
      })
      .state('customer.detail.visit', {
        url: '/visit',
        templateUrl: 'modules/customer/views/detail_visit.html',
        controller: 'Customer.Detail.VisitController',
        ncyBreadcrumb: {
          label: 'Home'
        }
      });
	}
]);
