'use strict';

/* jshint -W098 */
angular.module('login').controller('LoginController', ['$scope', 'SRAAuthenticate', 'SRALogout',
  function ($scope, SRAAuthenticate, SRALogout) {

    var token = 'QCiTzbXCAYA3AvDgYN3MuBwY/1i89q6TfW7aVS1Av1c=';
    $scope.user = {
      username: undefined,
      password: undefined
    };


    var rand = function() {
      return Math.random().toString(36).substr(2); // remove `0.`
    };

    var tokenGenerator = function() {
      return rand() + rand(); // to make it longer
    };

    token = tokenGenerator();


    $scope.login = function () {
      var passwordHash = CryptoJS.MD5($scope.user.password);
      passwordHash = passwordHash.toString(CryptoJS.enc.Base64);

      var digest = $scope.user.username + ',' + passwordHash + ',' + token;
      digest = CryptoJS.MD5(digest);
      digest = digest.toString(CryptoJS.enc.Base64);

      var input= {
        token: token,
        digest: digest,
        user: {
          username: $scope.user.username,
          password: passwordHash
        }
      };

      SRAAuthenticate.$login(input).then(
        function (response) {
          console.log(response);
        }, function error(err) {
          console.log(err);
        }
      );

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
