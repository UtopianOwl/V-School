var app = angular.module('MainApp');

app.controller('platformCtrl', ['$scope', 'httpService', 'totalService', function ($scope, httpService, totalService) {
    $scope.wishlistArray = [];
    httpService.get('platform').then(function (data) {
        $scope.wishlistArray = data;
    });
    $scope.getTotal = function () {
        return totalService.total($scope.wishlistArray);
    };
}]);