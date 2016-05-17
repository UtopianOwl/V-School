//function to create a new list item and append it to the UL
function printPokemon(array) {
    for (var i = 0; i < array.length; i++) {
        var li = document.createElement("LI");
        var t = document.createTextNode(array[i].name);
        li.appendChild(t);
        document.getElementById("pokemon").appendChild(li);
    }
}

// Create parsePokemon function
function parsePokemon(urlPath) {


    // Create a new XML HTTP Request object
    var xhr = new XMLHttpRequest();


    // Check the "onreadystatechange" event for changes (event listener)
    xhr.onreadystatechange = function () {

        // When it changed to a readystate of 4 and the the response is 200
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Do the stuff you want to do with the data
            var object = JSON.parse(xhr.responseText);
            var pokeArray = object.objects[0].pokemon;
            printPokemon(pokeArray);
            return pokeArray;
        }
    };

    // Open the request object - pass in request method
    xhr.open("GET", urlPath, true)

    // Send the request
    xhr.send();
}

parsePokemon("http://mean.codingcamp.us:6543/pokemon.json");