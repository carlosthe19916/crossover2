angular.module(ApplicationConfiguration.applicationModuleName).factory('Auth', function () {

  var auth = {
    authz: {},
    isAuthenticated: function(){
      return angular.isDefined(this.authz.sessionId);
    },
    init: function (auth) {
      this.authz = auth;
    }
  };

  return auth;
});
