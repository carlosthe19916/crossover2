'use strict';

(function () {

  var module = angular.module('crossover.sra', ['restangular']);

  module.provider('sra', function () {

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
  });

  module.factory('SRARestangular', ['Restangular', 'sra', function (Restangular, sra) {
    return Restangular.withConfig(function (RestangularConfigurer) {
      RestangularConfigurer.setBaseUrl(sra.getRestUrl());
    });
  }]);

  var RestObject = function (path, restangular, extendMethods) {
    var modelMethods = {

      /**
       * Retorna url*/
      $getBasePath: function () {
        return path;
      },
      /**
       * Retorna la url completa del objeto*/
      $getAbsoluteUrl: function () {
        return restangular.one(path, this.id).getRestangularUrl();
      },
      /**
       * Concatena la url de subresource con la url base y la retorna*/
      $concatSubResourcePath: function (subResourcePath) {
        return this.$getBasePath() + '/' + this.id + '/' + subResourcePath;
      },


      $new: function (id) {
        return angular.extend({id: id}, modelMethods);
      },
      $build: function () {
        return angular.extend({id: undefined}, modelMethods, {
          $save: function () {
            return restangular.all(path).post(this);
          }
        });
      },

      $search: function (queryParams) {
        return restangular.all(path).getList(queryParams);
      },

      $find: function (id) {
        return restangular.one(path, id).get();
      },
      $save: function () {
        return restangular.one(path, this.id).customPUT(restangular.copy(this), '', {}, {});
      },
      $saveSent: function (obj) {
        return restangular.all(path).post(obj);
      },

      $enable: function () {
        return restangular.one(path, this.id).all('enable').post();
      },
      $disable: function () {
        return restangular.one(path, this.id).all('disable').post();
      },
      $remove: function () {
        return restangular.one(path, this.id).remove();
      }
    };

    modelMethods = angular.extend(modelMethods, extendMethods);

    restangular.extendModel(path, function (obj) {
      if (angular.isObject(obj)) {
        return angular.extend(obj, modelMethods);
      } else {
        return angular.extend({id: obj}, modelMethods)
      }
    });

    restangular.extendCollection(path, function (collection) {
      angular.forEach(collection, function (row) {
        angular.extend(row, modelMethods);
      });
      return collection;
    });

    return modelMethods;
  };

  module.factory('SRAAuthenticate', ['SRARestangular', function (SRARestangular) {

    var extendMethod = {
      $login: function (data) {
        return SRARestangular.all(this.$getBasePath()).post(data);
      },
      $logout: function (data) {
        return SRARestangular.all(this.$getBasePath()).post(data);
      }
    };

    var authenticateResource = RestObject('authenticate', SRARestangular, extendMethod);

    return authenticateResource;

  }]);

  module.factory('SRALogout', ['SRARestangular', function (SRARestangular) {

    var extendMethod = {
      $login: function (data) {
        return SRARestangular.all(this.$getBasePath()).post(data);
      },
      $logout: function (data) {
        return SRARestangular.all(this.$getBasePath()).post(data);
      }
    };

    var authenticateResource = RestObject('logout', SRARestangular, extendMethod);

    return authenticateResource;

  }]);

  module.factory('SRACustomerDetail', ['SRARestangular', function (SRARestangular, $q, $timeout) {

    var customPromise = function ($q, data) {
      var deferred = $q.defer();
      $timeout(deferred.resolve(data));
      return deferred.promise;
    };

    var extendMethod = {
      $findDetail: function (id) {
        var input = {
          sessionId: '75984292-af89-4280-8aac-7f15b4e3a1ba',
          'customerid': '36'
        };

        return SRARestangular.all(this.$getBasePath()).post(input);
      },
      $saveNote: function (note) {
        var input = {
          'sessionId': '75984292-af89-4280-8aac-7f15b4e3a1ba',
          'customerid': '36',
          'status': 'InProgress',
          'notes': 'Final Test'
        };

        return SRARestangular.all(this.$getBasePath()).post(input);
      },
      $saveVisit: function (visit) {
        var input = {
          'sessionId': '75984292-af89-4280-8aac-7f15b4e3a1ba',
          'customerid': '36',
          'visit': {
            'date': '2015-06-06',
            'time': '3:30 PM',
            'action': 'Lead',
            'notes': 'Testing session management'}
        };

        return SRARestangular.all(this.$getBasePath()).post(input);
      }
    };

    var customerDetailResource = RestObject('customer/details', SRARestangular, extendMethod);

    return customerDetailResource;

  }]);

})();
