'use strict';

var RestObject = function (path, restangular, extendMethods) {
  var modelMethods = {

    /**
     * Retorna url*/
    $getModelMethods: function () {
      return modelMethods;
    },

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
      return restangular.one(path).all('search').post(queryParams);
    },
    $getAll: function (queryParams) {
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

  function extendObject(obj, modelMethods) {
    angular.extend(obj, modelMethods);
  }

  function extendArray(obj, modelMethods) {
    angular.forEach(obj, function (row) {
      if (angular.isObject(row)) {
        if (!angular.isArray(row)) {
          extendObject(row, modelMethods);
        }
      }
    });
  }

  function automaticExtend(obj, modelMethods) {
    if (angular.isDefined(obj)) {
      if (angular.isObject(obj)) {
        if (angular.isArray(obj)) {
          extendArray(obj, modelMethods);
        } else {
          if (angular.isDefined(obj.items) && angular.isArray(obj.items)) {
            extendArray(obj.items, modelMethods);
          } else {
            extendObject(obj, modelMethods);
          }
        }
      }
    }
  }

  restangular.extendModel(path, function (obj) {
    automaticExtend(obj, modelMethods);
    return obj;
  });

  restangular.extendCollection(path, function (collection) {
    automaticExtend(collection, modelMethods);
    return collection;
  });

  return modelMethods;
};

//For configure base path or the web services
angular.module(ApplicationConfiguration.applicationModuleName)

  .provider('crossover', function () {
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
  })
  .factory('CrossoverRestangular', ['Restangular', 'crossover', function (Restangular, crossover) {
    return Restangular.withConfig(function (RestangularConfigurer) {
      RestangularConfigurer.setBaseUrl(crossover.getRestUrl());
    });
  }])

  .factory('Auth', ['CrossoverRestangular', '$location', '$http','localStorageService', 'toastr', function (CrossoverRestangular, $location, $http, localStorageService, toastr) {
    var resources = {
      authz: {
        user: undefined,
        session: undefined
      },
      $login: function (user) {
        CrossoverRestangular.all('login').customGET('', user).then(function(response) {
          if(response.loginSucceeded) {
            resources.authz = {};
            resources.authz.user = {username: user.username};
            resources.authz.session = response;
            localStorageService.set('crossover_session', resources.authz);
            $location.path('/');
          } else {
            toastr.error('Username or password incorrect');
          }
        }, function (err) {
          toastr.error('Error 500: Server not respond');
        });
      },
      $logout: function () {
        var req = new XMLHttpRequest();
        req.open('GET', CrossoverRestangular.all('logout').getRestangularUrl() + '?sessionid=' + resources.authz.session.sessionId, true);
        req.setRequestHeader('Accept', 'application/json');
        req.onreadystatechange = function () {
          if (req.readyState == 4) {
            if (req.status == 200) {
              if(req.response === 'SUCCESS') {
                resources.authz = undefined;
                localStorageService.clearAll();
                $location.path('/login');
              } else {
                toastr.error('Error 400: The server dont logout the session');
              }
            } else {
              toastr.error('Error 500: Server not respond');
            }
          }
        };
        req.send();

        /*$http({
          method: 'GET',
          url: CrossoverRestangular.all('logout').getRestangularUrl(),
          params: {sessionid: resources.authz.session.sessionId}
        }).then(function successCallback(response) {
          if(response === 'SUCCESS') {
            resources.authz = undefined;
            localStorageService.clearAll();
            $location.path('/login');
          } else {
            toastr.error('Error 400: The server dont logout the session');
          }
        }, function errorCallback(response) {
          toastr.error('Error 500: Server not respond');
        });*/
      }
    };
    return resources;
  }])
  .factory('CORestService', ['CrossoverRestangular', 'Auth', function (CrossoverRestangular, Auth) {
    var extendedMethods = {
      $getSalesManData: function () {
        return CrossoverRestangular.all('salesmandata').customGET('', {sessionid: Auth.authz.session.sessionId});
      },
      $getLastYearData: function () {
        return CrossoverRestangular.all('lastyeardata').customGET('', {sessionid: Auth.authz.session.sessionId});
      },
      $getTopSalesOrders: function () {
        return CrossoverRestangular.all('topsalesorders').customGET('', {sessionid: Auth.authz.session.sessionId});
      },
      $getTopSalesMen: function () {
        return CrossoverRestangular.all('topsalesmen').customGET('', {sessionid: Auth.authz.session.sessionId});
      }
    };
    return new RestObject('', CrossoverRestangular, extendedMethods);
  }]);
