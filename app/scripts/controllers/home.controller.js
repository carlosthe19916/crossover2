angular.module(ApplicationConfiguration.applicationModuleName)
  .controller('HomeController', function ($scope, CORestService) {

    // View variables
    $scope.salesManData = {
      data: {
        columns: [],
        type: 'pie'
      }
    };
    $scope.lastYearData = {
      data: {
        columns: [],
        type: 'bar',
        groups: []
      },
      grid: {
        y: {lines: [{value: 0}]}
      }
    };
    $scope.topSalesOrders;
    $scope.topSalesMen;

    // Functions to load data
    $scope.loadSalesManData = function () {
      CORestService.$getSalesManData().then(function (response) {
        $scope.salesManData.data.columns = response.data;
      });
    };
    $scope.loadLastYearData = function () {
      CORestService.$getLastYearData().then(function (response) {
        $scope.lastYearData.data.columns = response.data;
      });
    };
    $scope.loadTopSalesOrders = function() {
      CORestService.$getTopSalesOrders().then(function (response) {
        $scope.topSalesOrders = response.data;
      });
    };
    $scope.loadTopSalesMen = function() {
      CORestService.$getTopSalesMen().then(function (response) {
        $scope.topSalesMen = response.data;
      });
    };

    // First call for default
    $scope.loadSalesManData();
    $scope.loadLastYearData();
    $scope.loadTopSalesOrders();
    $scope.loadTopSalesMen();

  });
