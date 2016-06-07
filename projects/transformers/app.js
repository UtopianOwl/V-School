var app = angular.module('AutobotApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/fave", {
            templateUrl: "views/fave/fave.html",
            controller: "faveCtrl"
        })
//        .when("/autobots", {
//            templateUrl: "views/autobots/autobots.html",
//            controller: "autoCtrl"
//        })
//        .when("/decepticons", {
//            templateUrl: "views/decepticons/decepticons.html",
//            controller: "decepCtrl"
//        })
//        .otherwise({
//            templateUrl: "views/home/home.html",
//            controller: "homeCtrl"
//        })
}]);
app.controller('mainCtrl', ['$scope', 'modelService', function ($scope, modelService) {

    $scope.autobotList = [];
    $scope.decepticonList = [];

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

}]);