var app = angular.module('pokeProfile', []);
app.controller('mainCtrl', ['$scope', 'pokeAPI', function ($scope, pokeAPI) {
    $scope.getPokemon = function () {
        pokeAPI.get($scope.poke.number).then(function (pokemon) {
            $scope.poke.name = pokemon.name;
            $scope.poke.attack = pokemon.attack;
            $scope.poke.ability = pokemon.abilities[0].name;
            $scope.poke.img = pokemon.sprite;
            document.pokeForm.reset();
            document.pokeForm.pokeNumber.focus();
        })
    }
}]);