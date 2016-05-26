var app = angular.module('yodaSpeak', [])
app.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {
    var header = { 'X-Mashape-Key' : 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm' }
    $scope.translate = function () {
        $http({
            method: 'GET',
            url: 'https://yoda.p.mashape.com/yoda?sentence=' + $scope.plainText,
            headers: {
                'X-Mashape-Key' : 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
            }
        }).then(function (response) {
            $scope.translation = response.data;
            console.log($scope.translation);
        });
    }
}]);