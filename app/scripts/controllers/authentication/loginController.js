angular.module(ApplicationConfiguration.applicationModuleName)
  .controller('LoginController', function ($scope, $state, toastr, localStorageService, CryptoUtil, SRAAuth, Auth) {

    $scope.user = {
      username: undefined,
      password: undefined
    };

    $scope.login = function () {
      var hash = CryptoUtil.MD5Base64Encoded($scope.user.password);
      var token = CryptoUtil.getRandomToken();

      var input = {
        token: token,
        digest: CryptoUtil.MD5Base64Encoded($scope.user.username + ',' + hash + ',' + token),
        user: {
          username: $scope.user.username,
          password: hash
        }
      };

      SRAAuth.$login(input).then(
        function (response) {
          if(response.sessionId) {
            localStorageService.set('crossover', response);
            Auth.init(response);
            $state.go('app.home');
          } else {
            toastr.error('Username and/or password incorrect.');
          }
        }, function error(err) {
          toastr.error(err);
        }
      );
    };

  }
);
