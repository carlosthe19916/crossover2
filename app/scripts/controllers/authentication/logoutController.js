angular.module(ApplicationConfiguration.applicationModuleName)
  .controller('LogoutController', function ($scope, $state, toastr, localStorageService, CryptoUtil, SRAAuth, Auth) {

    $scope.logout = function () {
      SRAAuth.$logout(Auth.authz.sessionId).then(function (response) {
        localStorageService.remove('crossover');
        $state.go('login');
      });
    };

  }
);
