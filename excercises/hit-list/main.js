var app = angular.module('hitList', [])

app.service('httpService', ['$http', function ($http) {
    this.get = function () {
        return $http.get('http://mean.codingcamp.us:6543/hitlist.json')
    }
}]);
app.controller('mainCtrl', ['$scope', '$http', 'httpService', function ($scope, $http, httpService) {
    httpService.get()
        .then(function (response) {
            $scope.hitList = response.data;
        });
}]);