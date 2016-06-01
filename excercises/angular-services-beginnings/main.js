var app = angular.module('pokeApp', []);

app.service('pokeService', function () {
    this.pokeArray = [];
    this.addPokemon = function (name) {
        return this.pokeArray.push(name)
    }
    this.removePokemon = function (name) {
        while (this.pokeArray.indexOf(name) !== -1) {
            var index = this.pokeArray.indexOf(name);
            this.pokeArray.splice(index, 1);
        }
    }
});

app.controller('pokeCtrl', ['$scope', 'pokeService', function($scope, pokeService) {
    $scope.pokeList = pokeService.pokeArray;
    $scope.add = function() {
        pokeService.addPokemon($scope.name);
        $scope.pokeList = pokeService.pokeArray;
    }
    $scope.remove = function () {
        pokeService.removePokemon($scope.name);
        $scope.pokeList = pokeService.pokeArray;
    }
}]);