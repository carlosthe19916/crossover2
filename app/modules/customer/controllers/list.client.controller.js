'use strict';

/* jshint -W098 */
angular.module('customer').controller('Customer.ListController', ['$scope', '$state', 'SRACustomer', 'Auth',
  function ($scope, $state, SRACustomer, Auth) {

    $scope.customers = [];

    $scope.loadCustomers = function () {
      SRACustomer.$getAll().then(function(response){
        $scope.customers = response.data;
      });
    };
    $scope.loadCustomers();

    $scope.edit = function (customer) {
      $state.go('app.customer.detail', {customerId: customer.id});
    };

  }
]);
