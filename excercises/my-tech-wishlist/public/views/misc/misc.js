var app = angular.module('MainApp');

app.controller('miscCtrl', ['$scope', 'httpService', 'totalService', function ($scope, httpService, totalService) {
    $scope.wishlistArray = [];
    httpService.get('misc').then(function (data) {
        $scope.wishlistArray = data;
    });
    $scope.getTotal = function () {
        return totalService.total($scope.wishlistArray);
    };
}]);