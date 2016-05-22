'use strict';

angular.module(ApplicationConfiguration.applicationModuleName)
  .controller('HeaderController', ['$scope', '$state', 'menuService', 'Auth',
    function ($scope, $state, menuService, Auth) {

      /*Security information*/
      $scope.user = {
        username: Auth.authz.user.username
      };
      $scope.logout = function () {
        Auth.$logout();
      };

      // Expose view variables
      $scope.$state = $state;

      // Get the topbar menu
      $scope.menu = menuService.getMenu('topbar');

    }]);
