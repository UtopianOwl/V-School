Practice making AJAX requests.

It was designed by Drew Nauman as part of the curriculum for the V-School full-stack web development bootcamp.

The full requirements for the assignment are below:

# Parsing JSON
03 AUGUST 2015 on JavaScript, Warmup, Programming Principles, Problem Solving
This warmup should help demonstrate how much nicer Angular (and jQuery, for that matter) make AJAX requests. To demonstrate this, you must do the following in vanilla JavaScript.

Use http://mean.codingcamp.us:6543/pokemon.json as your url for your XHR request to get the big list of pokemon.

Write a Javascript function called parsePokemon that takes a urlPath as a parameter.

The function should parse the JSON and create an array of objects that look like this:
```
{
    name: 'Charmander',
    resource_uri: 'api/v1/pokemon/8/'
},
{(Another pokemon object)},
{(Another pokemon object)},
{(Another pokemon object)},
```
...
etc.

Then make each Pokemon's name show up on a separate line in an HTML document. This means you won't be using node.js to run this JavaScript.

Hints
*You'll need to manually create an XML HTTP Request and handle the readyState with onReadyStateChange. Instead of requesting a web resource, you'll point to the file in your project.
*You'll also need to parse the JSON from the file: Parsing JSON
*This link gives an example of parsing JSON and using XHR to get data from a local file. It should be very useful.
*You'll need to use pure JavaScript to create and add an element to your HTML.