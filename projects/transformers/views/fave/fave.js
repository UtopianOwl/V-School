var app = angular.module('AutobotApp');

app.controller('faveCtrl', ['$scope', 'modelService', function ($scope, modelService) {

$scope.faveList=[];
    modelService.get().then(function (botList) {
        var fullList = [];
        fullList = botList;

        function callback(element, index, array) {
            if (element.username === 'root_Autobot' || element.username === 'root_Decepticon') {
                return;
            } else {
                $scope.faveList.push(element);
            }
        }
        fullList.forEach(callback);
        console.log($scope.faveList);
    });

    $scope.add = function () {
        modelService.add($scope.newItem).then(function (item) {
            $scope.faveList.push(item);
        });
    }
    $scope.edit = function (index) {
        modelService.edit($scope.editItem, index).then(function (item) {
            $scope.faveList[index] = item;
        });
    }
    $scope.delete = function (index) {
        modelService.delete($scope.faveList[index]._id).then(function (response) {
            $scope.faveList.splice(index, 1);

        });
    }
    

}]);