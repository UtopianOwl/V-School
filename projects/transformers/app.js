var app = angular.module('AutobotApp', []);

app.controller('mainCtrl', ['$scope', 'modelService', function($scope, modelService) {
    $scope.botList = [];
    modelService.get().then(function(botList) {
        $scope.botList = botList;
    });
    $scope.add = function() {
        modelService.add($scope.newItem).then(function (item) {
            $scope.botList.push(item);
        });
    }
    $scope.edit = function(index) {
        modelService.edit($scope.editItem, index).then(function (item) {
            $scope.botList[index] = item;
        });
    }
    $scope.delete = function(index) {
        $scope.botList = modelService.delete($scope.botList[index]._id).then(function (response) {
            $scope.botList.splice(index, 1);
        });
    }
}]);