var app = angular.module('pokeProfile');
app.service('pokeAPI', ['$http', function ($http) {
    var baseUrl = 'http://pokeapi.co/';
    var pokemon = {};
    this.get = function (number) {
        return $http.get(baseUrl + 'api/v1/pokedex/1').then(function (response) {
            return $http.get(baseUrl + response.data.pokemon[(number - 1)].resource_uri);
        }).then(function (response) {
            pokemon = response.data;
            return $http.get(baseUrl + pokemon.sprites[0].resource_uri);
        }).then(function (response) {
            pokemon.sprite = baseUrl + response.data.image;
            return pokemon;
        });
    };
}]);