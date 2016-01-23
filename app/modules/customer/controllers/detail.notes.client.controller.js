'use strict';

/* jshint -W098 */
angular.module('customer').controller('Customer.Detail.NotesController', ['$scope', '$state', 'toastr', 'customerDetail', 'SRACustomer',
  function ($scope, $state, toastr, customerDetail, SRACustomer) {

    $scope.customerDetail = customerDetail.data;

    $scope.view = {
      notes: undefined
    };

    $scope.combo = {
      status: [
        {value: 'New', name: 'New'},
        {value: 'InProgress', name: 'In Progress'},
        {value: 'OrderPlaced', name: 'Order Placed'},
        {value: 'Support', name: 'Support'},
        {value: 'Cancelled', name: 'Cancelled'},
        {value: 'Rejected', name: 'Rejected'}
      ]
    };
    $scope.combo.selected ={
      status: undefined
    };

    $scope.save = function () {
      SRACustomer.$saveNote($scope.note).then(function (response) {
        toastr.success('Note successfully saved.');
      });
    };

  }
]);
