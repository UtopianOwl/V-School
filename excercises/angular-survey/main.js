angular.module('colorSurvey', [])
    .controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.select = function () {
            $http.post('http://mean.codingcamp.us:4455/survey/colors', $scope.color)
            .then(function(response) {
                $http.get('http://mean.codingcamp.us:4455/survey/colors')
                .then(function(response) {
                    // I need to create my graph here
                });
            });
        }
}]);