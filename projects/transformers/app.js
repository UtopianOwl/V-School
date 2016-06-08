var app = angular.module('AutobotApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/fave", {
            templateUrl: "views/fave/fave.html",
            controller: "faveCtrl"
        })
        .when("/autobots/:autobotName", {
            templateUrl: "views/autobots/autobots.html",
            controller: "autobotCtrl"
        })
        .when("/decepticons/:decepticonName", {
            templateUrl: "views/decepticons/decepticons.html",
            controller: "decepticonCtrl"
        })
        .otherwise({
            templateUrl: "views/home/home.html",
            controller: "homeCtrl"
        })
}]);

app.directive('transformer', function() {
    return {
        restrict: 'E',
        scope: {
            bot: '='
            
        },
        templateUrl: 'directives/transformer.html'
    }
});

app.controller('mainCtrl', ['$scope', 'modelManager', function ($scope, modelManager) {
    modelManager.get();
    $scope.autobotList = modelManager.autobotList;
    $scope.decepticonList = modelManager.decepticonList;
    
}]);

