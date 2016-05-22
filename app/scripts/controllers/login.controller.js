angular.module(ApplicationConfiguration.applicationModuleName)
  .controller('LoginController', function ($scope, $state, toastr, Auth) {

    $scope.user = {
      username: undefined,
      password: undefined
    };

    $scope.login = function () {
      Auth.$login($scope.user);
    };

  });
