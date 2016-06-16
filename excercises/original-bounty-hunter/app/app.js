var app = angular.module('bountyApp', []);

app.filter('status', function () {
    return function (bool) {
        if (typeof bool === "boolean") {
            return bool ? "Open" : "Complete";
        } else {
            return bool;
        }
    }
});

//app.config(['managerService', function (managerService) {
//    managerService.get();
//}]);

app.controller('mainCtrl', ['$scope', 'managerService', function ($scope, managerService) {
    $scope.managerService = managerService;
    managerService.get();
    
    $scope.toggleAdd = function () {
        $scope.addToggle = true;
    }
    $scope.add = function () {
        $scope.addToggle = false;
        managerService.add($scope.newBounty);
        document.newBountyForm.reset();
        document.newBountyForm.firstName.focus();
    };

    $scope.toggleEdit = function (bounty) {
        bounty.toggle = true;
    }

    $scope.edit = function (bounty) {
        bounty.toggle = false;
        managerService.edit(bounty);
    }

    $scope.delete = function (bounty) {
        managerService.delete(bounty);
    }
}]);