'use strict';

/* jshint -W098 */
angular.module('login').controller('LoginController', ['$scope', 'SRAAuthenticate', 'SRALogout',
  function ($scope, SRAAuthenticate, SRALogout) {

    console.log('rerere');

    $scope.package = {
      name: 'login'
    };

    $scope.view = {
      username: undefined,
      password: undefined
    };

    var input2 = {
      token: 'QCiTzbXCAYA3AvDgYN3MuBwY/1i89q6TfW7aVS1Av1c=',
      digest: '6R1HZqYJFfRQUA0L/hqCEA==',
      user: {username: 'john.doe', password: 'X03MO1qnZdYdgyfeuILPmQ=='}
    };

    $scope.login = function () {
      //$scope.accounts = Restangular.all('accounts').getList().$object;
      SRAAuthenticate.$login(input2).then(
        function (response) {
          console.log(response);
        }, function error(err) {
          console.log(err);
        }
      );
      $scope.logout();
    };

    $scope.logout = function () {
      var lo = {'sessionId': '75984292-af89-4280-8aac-7f15b4e3a1ba'};
      SRALogout.$logout(lo).then(
        function (response) {
          console.log(response);
        }, function error(err) {
          console.log(err);
        }
      );
    };

  }
]);
