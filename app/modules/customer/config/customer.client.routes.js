'use strict';

// Setting up route
angular.module('customer').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('customer', {
        url: '/customers',
        template: '<div ui-view></div>',
        ncyBreadcrumb: {
          skip: true
        }
      })

      .state('customer.list', {
        url: '/list',
        templateUrl: 'modules/customer/views/list.html',
        controller: 'Customer.ListController',
        ncyBreadcrumb: {
          label: 'Home'
        }
      })

      .state('customer.detail', {
        url: '/:customerId/detail',
        templateUrl: 'modules/customer/views/detail.html',
        controller: 'Customer.DetailController',
        resolve: {
          customerDetail: function ($state, $stateParams, SRACustomer) {
            return SRACustomer.$findDetail($stateParams.customerId);
          }
        },
        ncyBreadcrumb: {
          label: 'Customer detail',
          parent: 'customer.list'
        }
      })
      .state('customer.detail.notes', {
        url: '/notes',
        templateUrl: 'modules/customer/views/detail_notes.html',
        controller: 'Customer.Detail.NotesController',
        ncyBreadcrumb: {
          label: 'Notes'
        }
      })
      .state('customer.detail.visit', {
        url: '/visit',
        templateUrl: 'modules/customer/views/detail_visit.html',
        controller: 'Customer.Detail.VisitController',
        ncyBreadcrumb: {
          label: 'Visit'
        }
      });
  }
]);
