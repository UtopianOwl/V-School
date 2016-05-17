function printPokemon(array) {
    for (var i = 0; i < array.length; i++) {
        var $poke = $('<a href="https://www.google.com/#q=' + array[i].name + '"<p class="col-xs-2"></a>').text(array[i].name);
        $('#pokeList').append($poke);
    }
}

$.ajax('http://pokeapi.co/api/v1/pokedex/1/', {
    success: function (data) {
        printPokemon(data.pokemon);
    },
    error: function () {
        $('#pokeList').html('<p>An error has occurred</p>');
    }
});