angular.module(ApplicationConfiguration.applicationModuleName)
  .controller('LayoutController', function ($scope, $uibModal, toastr) {

    // Toggle the menu items
    $scope.isCollapsed = false;
    $scope.toggleCollapsibleMenu = function () {
      $scope.isCollapsed = !$scope.isCollapsed;
    };

    // Collapsing the menu after navigation
    $scope.$on('$stateChangeSuccess', function () {
      $scope.isCollapsed = false;
    });

    $scope.openPrivacyPolicyOrTermOfUse = function () {
      var modalInstance = $uibModal.open({
        templateUrl: 'views/privacyPolicyOrTermOfUse.html'
      });
    };

    $scope.openSupport = function () {
      var modalInstance = $uibModal.open({
        templateUrl: 'views/support.html',
        controller: 'SupportController'
      });
      modalInstance.result.then(function () {
        toastr.success('Request is sent successfully.');
      });
    };

  });
