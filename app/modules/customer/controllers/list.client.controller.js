'use strict';

/* jshint -W098 */
angular.module('customer').controller('Customer.SearchController', ['$scope', '$state',
  function ($scope, $state) {

    $scope.package = {
      name: 'admin'
    };

    $scope.loadCustomers = function () {
      $scope.customers = [{
        'id': 36,
        'customername': 'Amul',
        'productname': 'Sorting Machine',
        'status': 'New1',
        'notes': 'Testing',
        'username': 'john.doe'
      }, {
        'id': 37,
        'customername': 'Biltmore Global Superstore',
        'productname': 'Color Swatch',
        'status': 'InProgress',
        'notes': 'Auth Testing',
        'username': 'john.doe'
      }, {
        'id': 38,
        'customername': 'Arrow',
        'productname': 'Aimpoint 9000SC',
        'status': 'OrderPlaced',
        'notes': null,
        'username': 'john.doe'
      }, {
        'id': 39,
        'customername': 'Promotional Shop',
        'productname': 'Aimpoint CompC3',
        'status': 'Support',
        'notes': null,
        'username': 'john.doe'
      }, {
        'id': 40,
        'customername': 'The Smooth Mover',
        'productname': 'Barska 6-24x50',
        'status': 'Rejected',
        'notes': null,
        'username': 'john.doe'
      }, {
        'id': 41,
        'customername': 'Karioi Clinic',
        'productname': 'BSA 3-9x50',
        'status': 'New',
        'notes': null,
        'username': 'john.doe'
      }, {
        'id': 42,
        'customername': 'Property Net',
        'productname': 'Fullfield DAC',
        'status': 'InProgress',
        'notes': null,
        'username': 'john.doe'
      }
      ];
    };
    $scope.loadCustomers();

    $scope.edit = function(customer) {
      $state.go('customer.detail.dashboard', {customerId: customer.id});
    };

  }
]);
