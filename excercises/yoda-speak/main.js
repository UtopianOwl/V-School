var app = angular.module('yodaSpeak', [])
app.service('httpService', ['$http', function ($http) {
    this.get = function (plainText) {
        return $http({
            method: 'GET',
            url: 'https://yoda.p.mashape.com/yoda?sentence=' + plainText,
            headers: {
                'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
            }
        })
    }
}])
app.controller('mainCtrl', ['$scope', '$http', 'httpService', function ($scope, $http, httpService) {
    $scope.translate = function () {
        httpService.get($scope.plainText).then(function (response) {
            $scope.translation = response.data;
        });
    }
}]);