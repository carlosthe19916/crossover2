angular.module(ApplicationConfiguration.applicationModuleName)
  .controller('SessionController', function ($scope, $state, toastr, CryptoUtil, SRAAuth, Auth) {
    $scope.user = Auth.authz.data;

    $scope.logout = function () {
      SRAAuth.$logout().then(function (response) {
        Auth.clean();
        $state.go('login');
      });
    };

  }
);
