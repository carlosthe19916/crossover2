'use strict';

/* jshint -W098 */
angular.module('customer').controller('Customer.DetailController', ['$scope', '$state',
  function ($scope, $state) {

    $scope.detail = {
      'id': 36,
      'customername': 'Amul',
      'productname': 'Sorting Machine',
      'status': 'New1',
      'notes': 'Testing',
      'username': 'john.doe',
      'addresses': [{
        'id': 22,
        'type': 'Office',
        'street1': 'Suite 315',
        'street2': null,
        'city': 'North brunswick',
        'state': 'New Jersey',
        'country': 'US',
        'pincode': 7678
      }],
      'communications': [{'id': 88, 'category': 'Phone', 'type': 'Other', 'value': '4567091239'}, {
        'id': 86,
        'category': 'Skype',
        'type': 'Skype',
        'value': 'amul.contact'
      }, {'id': 87, 'category': 'Email', 'type': 'Office', 'value': 'sales@amul.com'}, {
        'id': 85,
        'category': 'Phone',
        'type': 'Office',
        'value': '9876543210'
      }],
      'visit': {
        'id': 2, 'date': 1431196200000, 'time': '09:00 AM', 'action': 'Opportunity', 'notes': 'Testing save visit 2'}
      };

  }
]);
