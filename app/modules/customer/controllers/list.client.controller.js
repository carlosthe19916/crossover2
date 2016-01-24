'use strict';

/* jshint -W098 */
angular.module('customer').controller('Customer.ListController', ['$scope', '$state', 'SRACustomer',
  function ($scope, $state, SRACustomer) {

    $scope.customers = [];

    $scope.filterOptions = {
      filterText: undefined,
      filterBy: undefined
    };

    $scope.combo = {
      orderBy: [
        {name: 'id', value: 'id'},
        {name: 'Customer Name', value: 'customername'},
        {name: 'Product Name', value: 'productname'},
        {name: 'status', value: 'status'}
      ]
    };
    $scope.combo.selected = {
      orderBy: undefined
    };

    $scope.refresh = function() {

    };

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
