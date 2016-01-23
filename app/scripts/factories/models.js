'use strict';

angular.module(ApplicationConfiguration.applicationModuleName).provider('sra', function () {
  this.restUrl = 'http://localhost';
  this.$get = function () {
    var restUrl = this.restUrl;
    return {
      getRestUrl: function () {
        return restUrl;
      }
    }
  };
  this.setRestUrl = function (restUrl) {
    this.restUrl = restUrl;
  };
}).factory('SRARestangular', ['Restangular', 'sra', function (Restangular, sra) {
  return Restangular.withConfig(function (RestangularConfigurer) {
    RestangularConfigurer.setBaseUrl(sra.getRestUrl());
  });
}]).factory('SRAAuth', ['SRARestangular', function (SRARestangular, Auth) {

  var resources = {
    $login: function (input) {
      return SRARestangular.all('authenticate').post(input);
    },
    $logout: function () {
      var input = {'sessionId': Auth.sessionId};
      return SRARestangular.all('logout').post(input);
    }
  };

  return resources;
}])

  .factory('SRACustomer', ['SRARestangular', function (SRARestangular, Auth) {

    var resources = {
      $findDetail: function (id) {
        var input = {'sessionId': Auth.sessionId};
        input.customerid = id;
        return SRARestangular.all('customer/details').post(input);
      },
      $saveNote: function (note) {
        //{ "sessionId" : "75984292-af89-4280-8aac-7f15b4e3a1ba", "customerid" : "36", "status" : "InProgress", "notes" : "Final Test" }
        //return SRARestangular.all('customer/savenotes').post(input);
        return undefined;
      },
      $saveVisit: function (visit) {
        return undefined;
        //return SRARestangular.all(this.$getBasePath()).post(input);
      }
    };

    return resources;
  }]);
