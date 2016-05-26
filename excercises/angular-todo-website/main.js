var app = angular.module('toDoApp', []);
document.toDoForm.title.focus();
app.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.toDoArray = [];
    $scope.editToggle = false;
    var myIndex;

    $http.get('http://mean.codingcamp.us/drewnauman/todo')
        .then(function (response) {
            $scope.toDoArray = response.data;
        });

    $scope.addToDo = function () {
        $http.post('http://mean.codingcamp.us/drewnauman/todo', $scope.item)
            .then(function (response) {
                $scope.toDoArray.push(response.data);
            });
        document.toDoForm.reset();
        document.toDoForm.title.focus();
    }

    $scope.editToDo = function (index) {
        $scope.editToggle = !$scope.editToggle;
        myIndex = index;
        $scope.item = $scope.toDoArray[myIndex];
        document.toDoForm.title.focus();

    }

    $scope.saveChanges = function () {
        $scope.editToggle = !$scope.editToggle;
        $http.put('http://mean.codingcamp.us/drewnauman/todo/' + $scope.item._id, $scope.item)
            .then(function (response) {
                $scope.toDoArray[myIndex] = response.data;
            })
        document.toDoForm.reset();
        document.toDoForm.title.focus();
    }

    $scope.deleteToDo = function (index) {
        $http.delete('http://mean.codingcamp.us/drewnauman/todo/' + $scope.toDoArray[index]._id)
            .then(function (response) {
                $scope.toDoArray.splice(index, 1);
            })

    }

}]);