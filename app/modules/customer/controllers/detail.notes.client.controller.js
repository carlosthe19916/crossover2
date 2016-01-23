'use strict';

/* jshint -W098 */
angular.module('customer').controller('Customer.Detail.NotesController', ['$scope', '$state', 'toastr', 'customerDetail', 'SRACustomer',
  function ($scope, $state, toastr, customerDetail, SRACustomer) {

    $scope.customerDetail = customerDetail.data;
    $scope.note = {

    };

    $scope.save = function () {
      SRACustomer.$saveNote($scope.note).then(function (response) {
        toastr.success('Note successfully saved.');
      });
    };

  }
]);
