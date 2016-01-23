'use strict';

/* jshint -W098 */
angular.module('customer').controller('Customer.Detail.VisitController', ['$scope', '$state', 'toastr', 'customerDetail', 'SRACustomer',
  function ($scope, $state, toastr, customerDetail, SRACustomer) {

    $scope.customerDetail = customerDetail.data;
    $scope.visit = {};

    $scope.save = function () {
      SRACustomer.$saveVisit($scope.visit).then(function (response) {
        toastr.success('Note successfully saved.');
      });
    };

  }
]);
