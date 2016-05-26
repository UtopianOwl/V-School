var app = angular.module('hitList', [])
app.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {
 console.log("hello");   
    $http.get('http://mean.codingcamp.us:6543/hitlist.json')
        .then(function (response) {
            console.log(response.data);
            console.log('hello');
            $scope.hitList = response.data;
        });
    console.log($scope.hitList);
}]);