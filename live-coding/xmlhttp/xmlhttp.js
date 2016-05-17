// Create a new XMLHTTPRequest object
var xhr = new XMLHttpRequest();
var pokemon = document.getElementById("pokemon");

// Check the "onreadystatechange" event for changes (event listener)
xhr.onreadystatechange = function () {
    // when it changes to a readystate of 4 the response is 200
    if (xhr.readyState === 4 && xhr.status === 200) {
        // Do the stuff you want to do with the data
        var object = JSON.parse(xhr.responseText);
        pokemon.innerHTML = object.name;

    }
};

// Open the request object - pass in request method
xhr.open("GET", "http://pokeapi.co/api/v2/pokemon/1", true);

// Send the request
xhr.send();