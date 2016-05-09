var readline = require("readline-sync");

var response1 = readline.question('If you give me a word I will shout it back at you: ');
console.log('*shouting* ' + response1.toUpperCase() + '!')

var response2 = readline.question('My, wasn\'t that fun! I love letting off a little steam, lol. \n But you know what I love even more?! COUNTING!! \n Give me a word or phrase and I will count how many letters it has for you (including spaces): ');
console.log('Your word/phrase had ' + response2.length + ' characters.')

var response3 = readline.question('But enough about me. Tell me your two favorite things. The first one is... ');
var response4 = readline.question('The second one is... ');
console.log(response3.concat(response4) + ". \n TA-DA, I made you a SUPER-THING! \n It's probably your new favorite thing I bet... No big deal.")

var response5 = readline.question('Anyway, tell me a little more about yourself. \n I would love it if you would give me a breif description of \n your favorite place to play outside as child (at least 20 characters please): ');

var i = Math.round(response5.length / 2);
console.log("Wow, that sounds like a lot of fun! I especially like the part where you said: \n '" + response5.slice(i, response5.length) + "'")

var response6 = readline.question("By the way your info was " + response5.length + " characters long. \n Would you like me to read it back to you starting from somewhere else? \n Just give me a number in the range [0-" + response5.length + "]:")
console.log("Okay, here you go: \n" + response5.slice(response6, response5.length))