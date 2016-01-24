'use strict';

/* jshint -W098 */
angular.module('customer').controller('Customer.Detail.VisitController', ['$scope', '$state', 'toastr', 'customerDetail', 'SRACustomer',
  function ($scope, $state, toastr, customerDetail, SRACustomer) {

    $scope.working = false;

    $scope.customerDetail = customerDetail.data;

    $scope.view = {
      date: undefined,
      time: undefined,
      notes: undefined,
      action: undefined
    };

    $scope.combo = {
      action: [
        {value: 'Offer', name: 'Offer'},
        {value: 'Lead', name: 'Lead'},
        {value: 'Opportunity', name: 'Opportunity'},
        {value: 'New Customer', name: 'New Customer'}
      ]
    };

    $scope.save = function () {
      SRACustomer.$saveVisit($scope.visit).then(function (response) {
        toastr.success('Note successfully saved.');
      });
    };

  }
]);
