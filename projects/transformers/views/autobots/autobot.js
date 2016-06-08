var app = angular.module('AutobotApp');

app.controller('autobotCtrl', ['$scope', 'modelManager', '$routeParams', function($scope, modelManager, $routeParams) {
    for (var i = 0; i < modelManager.autobotList.length; i++) {
        if (modelManager.autobotList[i].name === $routeParams.autobotName) {
            $scope.bot = modelManager.autobotList[i];
        }
    }
}]);