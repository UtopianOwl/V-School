angular.module('myApp', [])
.controller('sumCtrl', ['$scope', 'arithmetic', function($scope, arithmetic) {
    $scope.add = function() {
        $scope.sum.sum = arithmetic.add($scope.sum.x, $scope.sum.y);
    }
}])
.controller('productCtrl', ['$scope', 'arithmetic', function($scope, arithmetic) {
    $scope.multiply = function() {
        $scope.product.product =  arithmetic.multiply($scope.product.x, $scope.product.y);
    }
}])