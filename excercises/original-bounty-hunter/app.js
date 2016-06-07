var app = angular.module('bountyApp', []);

app.filter('status', function () {
    return function(bool) {
        if (typeof bool === "boolean") {
            return bool ? "Open" : "Complete";
        } else {
            return bool;
        }
    }
});

app.controller('mainCtrl', ['$scope', 'httpService', function ($scope, httpService) {
    $scope.bountyList = [];
    httpService.get().then(function (bountyList) {
        $scope.bountyList = bountyList;
    });
    $scope.toggleAdd = function () {
        $scope.addToggle = true;
    }
    $scope.add = function() {
        $scope.addToggle = false;
        httpService.add($scope.newBounty).then(function (newBounty) {
            $scope.bountyList.push(newBounty);
        });
        document.newBountyForm.reset();
        document.newBountyForm.firstName.focus();
    };
    
    $scope.toggleEdit = function(index) {
        $scope.bountyList[index].toggle = true;
    }
    
    $scope.edit = function(bounty) {
        bounty.toggle = false;
        httpService.edit(bounty).then(function (bounty) {
            bounty = bounty;
        });
    }
    
    $scope.delete = function(index) {
        httpService.delete($scope.bountyList[index].id).then(function (bounty) {
            $scope.bountyList.splice(index, 1); 
        });
    }
}]);