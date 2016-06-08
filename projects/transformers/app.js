var app = angular.module('AutobotApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/fave", {
            templateUrl: "views/fave/fave.html",
            controller: "faveCtrl"
        })
        .when("/autobots", {
            templateUrl: "views/autobots/autobots.html",
            controller: "mainCtrl"
        })
        .when("/decepticons", {
            templateUrl: "views/decepticons/decepticons.html",
            controller: "mainCtrl"
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

app.controller('mainCtrl', ['$scope', 'modelService', function ($scope, modelService) {

    $scope.autobotList = [];
    $scope.decepticonList = [];
    $scope.bot = {};

    modelService.get().then(function (botList) {
        var fullList = [];
        fullList = botList;

        function autoCallback(element, index, array) {
            if (element.username === 'root_Autobot') {
                $scope.autobotList.push(element);
            }
        }
        function decepCallback(element, index, array) {
            if (element.username === 'root_Decepticon') {
                $scope.decepticonList.push(element);
            }
        }
        fullList.forEach(autoCallback);
        fullList.forEach(decepCallback);
    });
    
    $scope.autobot = function(index) {
        $scope.bot = $scope.autobotList[index];
        console.log($scope.bot);
    }
    $scope.decepticon = function(index) {
        $scope.bot = $scope.decepticonList[index];
         console.log($scope.bot);
    }
}]);

