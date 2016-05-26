angular.module('SWOC', [])

.controller('mainCtrl', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {
    $scope.introducing = true;
    $http.get('http://swapi.co/api/films/1/')
        .then(function (response) {
            $scope.starWars = response.data;
        });
    $timeout(function () {
        $scope.introducing = !$scope.introducing;
    }, 5000);

}]);

function pageScroll() {
    window.scrollBy(0, 1); // horizontal and vertical scroll increments
    scrolldelay = setTimeout('pageScroll()', 10); // scrolls every 100 milliseconds
}

function stopScroll() {
    	clearTimeout(scrolldelay);
}

setTimeout(pageScroll(), 5000);
//setTimeout(stopScroll(), 24000);