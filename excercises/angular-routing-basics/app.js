var app = angular.module('RoutingApp', ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/about", {
            templateUrl: "about/about.html",
            controller: "aboutCtrl"
        })
        .when("/whyILove", {
            templateUrl: "why-i-love/whyILove.html",
            controller: "whyILoveCtrl"
        })
        .otherwise({
            templateUrl: "home/home.html",
            controller: "homeCtrl"
        })
});

app.controller('mainCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.url();
    }
}]);