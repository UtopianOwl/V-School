var app = angular.module('myApp', ['myService'])
app.controller('mainCtrl', ['$scope', 'forReals', function ($scope) {
    $scope.array = ['dog', 'cat', 'pig', 'cow', 'rat']
}]);