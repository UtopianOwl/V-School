var app = angular.module('AutobotApp');

app.controller('decepticonCtrl', ['$scope', 'modelManager', '$routeParams', function($scope, modelManager, $routeParams) {
    for (var i = 0; i < modelManager.decepticonList.length; i++) {
        if (modelManager.decepticonList[i].name === $routeParams.decepticonName) {
            $scope.bot = modelManager.decepticonList[i];
        }
    }
}]);