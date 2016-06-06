var app = angular.module('MainApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/misc", {
            templateUrl: "public/views/misc/misc.html",
            controller: "miscCtrl"
        })
        .when('/platform', {
            templateUrl: "public/views/platform/platform.html",
            controller: "platformCtrl"
        });
});

app.service('httpService', ['$http', function ($http) {
    this.get = function (view) {
        return $http.get('public/views/' + view + '/' + view + '.json').then(function (response) {
            return response.data;
        });
    };
}]);

app.service('totalService', function () {
    this.total = function (wishArray) {
        var total = 0;
        for (var i = 0; i < wishArray.length; i++) {
            total += wishArray[i].price;
        }
        return total;
    };
});

app.controller('mainCtrl', ['$scope', '$location', function ($scope, $location) {

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.url();
    }
}]);