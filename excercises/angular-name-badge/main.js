var app = angular.module('badgeApp', []);


app.controller('mainCtrl', ['$scope', function ($scope) {
    $scope.badges = [];
    $scope.createBadge = function () {
        $scope.badges.push($scope.person);
        $scope.person = {};
    }
}]);