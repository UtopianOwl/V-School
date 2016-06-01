var app = angular.module('clickerApp', []);

app.service('redService', function() {
    this.counter = 100;
    this.reset = function () {
        this.counter = 100;
    }
    this.increment = function() {
        this.counter++;
    }
    this.decrement = function() {
        this.counter--;
    }
});

app.service('blueService', function() {
    this.counter = 100;
    this.reset = function () {
        this.counter = 100;
    }
    this.increment = function() {
        this.counter++;
    }
    this.decrement = function() {
        this.counter--;
    }
});

app.controller('mainCtrl', ['$scope', 'redService', 'blueService', function($scope, redService, blueService) {
    $scope.redCount = redService.counter;
    $scope.blueCount = blueService.counter;
    $scope.redClick = function () {
        redService.increment();
        blueService.decrement();
        $scope.redCount = redService.counter;
        $scope.blueCount = blueService.counter;
        if (blueService.counter === 0) {
            blueService.reset();
            $scope.blueCount = blueService.counter;
        }
    }
    $scope.blueClick = function () {
        blueService.increment();
        redService.decrement();
        $scope.redCount = redService.counter;
        $scope.blueCount = blueService.counter;
        if (redService.counter === 0) {
            redService.reset();
            $scope.redCount = redService.counter;
        }
    }
}]);