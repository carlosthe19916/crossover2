angular.module(ApplicationConfiguration.applicationModuleName)
  .controller('SupportController', function ($scope, $uibModalInstance) {

    $scope.data = {};

    $scope.save = function () {
      $uibModalInstance.close($scope.data);
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss();
    };

  });
