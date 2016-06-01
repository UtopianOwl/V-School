angular.module('cartoonApp', [])
.controller('mainCtrl', ['$scope', 'mainSrvc', function($scope, mainSrvc) {
    $scope.cartoons = mainSrvc.cartoonArray;
    $scope.addCharacter = function() {
        $scope.cartoons = mainSrvc.addCartoon($scope.character);
        console.log($scope.cartoons);
    }
}]);