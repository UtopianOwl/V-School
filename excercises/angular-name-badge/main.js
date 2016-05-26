var app = angular.module('badgeApp', []);


app.controller('mainCtrl', ['$scope', function ($scope) {
    $scope.badges = [];
    $scope.panels = ['panel-success', 'panel-info', 'panel-warning', 'panel-danger']
    $scope.createBadge = function () {
        $scope.badges.push($scope.person);
        document.badgeForm.reset();
        $scope.person = {};
        $scope.badgeForm.$setPristine();
        document.badgeForm.firstName.focus();
    }
}]);