var readline = require("readline-sync");


//first problem
function eachLetter(word) {
    each = word.split("")
    for (i = 0; i < word.length; i++) {
        console.log(each[i]);
    }
}
//second problem
function letterIndex(word2) {
    var response = readline.question("Enter a letter: ");
    var index;
    search = word2.split("")
    for (i = 0; i < word2.length; i++) {
        if (search[i] === response) {
            index = search.indexOf(response);
            console.log(index);
            break;
        }
    }
    if (index === undefined) {console.log("No Match")}
}

//Third problem
function find42() {
    do
        var num42 = readline.question("Enter a number: ");
    while (num42 != "42");
}

//Fourth problem
var numbers = [];
function findSmall() {
    for (i = 0; i < 10; i++) {
        var tenNumber = readline.question("Enter a number: ");
        numbers.push(parseInt(tenNumber));
    }
numbers.sort(function(a, b){return a-b});
console.log(numbers.valueOf());
console.log(numbers.shift());
        
}
findSmall();


//BONUS: check if input is a number!
var input = readline.question("Type things: ");
var number = parseInt(input);

if (isNaN(number)) {
    console.log("You're dumb.");
} else {
    console.log ("This is a number. Good Job!")
}