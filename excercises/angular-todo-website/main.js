var app = angular.module('toDoApp', []);
document.toDoForm.title.focus();

app.service('httpService', ['$http', function($http) {
    var baseUrl = 'http://mean.codingcamp.us/drewnauman/todo';
    this.get = function () {
       return $http.get(baseUrl)
    }
    this.post = function (item) {
       return $http.post(baseUrl, item);

    }
    this.put = function (id, item) {
         return $http.put(baseUrl + '/' + id, item);
    }
    this.delete = function (id) {
        return $http.delete(baseUrl + '/' + id);
            
    }
}]);

app.controller('mainCtrl', ['$scope', '$http', 'httpService', function ($scope, $http, httpService) {
    $scope.toDoArray = [];
    $scope.editToggle = false;
    var myIndex;
    $scope.panels = ['panel-success', 'panel-info', 'panel-warning', 'panel-danger']


    httpService.get().then(function (response) {
        $scope.toDoArray = response.data;
    });
    

    $scope.addToDo = function () {
        httpService.post($scope.item).then(function (response) {
            $scope.toDoArray.push(response.data);
        });
        document.toDoForm.reset();
        document.toDoForm.title.focus();
        $scope.item = {};
    }

    $scope.editToDo = function (index) {
        $scope.editToggle = !$scope.editToggle;
        myIndex = index;
        $scope.item = $scope.toDoArray[myIndex];
        document.toDoForm.title.focus();

    }

    $scope.saveChanges = function () {
        $scope.editToggle = !$scope.editToggle;
        httpService.put($scope.item._id, $scope.item).then(function (response) {
                $scope.toDoArray[myIndex] = response.data;
            });
        document.toDoForm.reset();
        document.toDoForm.title.focus();
    }

    $scope.deleteToDo = function (index) {
        var id = $scope.toDoArray[index]._id
        httpService.delete(id).then(function (response) {
                $scope.toDoArray.splice(index, 1);
            });
    }
}]);