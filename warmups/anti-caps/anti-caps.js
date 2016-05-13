var readline = require("readline-sync");

var string = readline.question("Enter a string: ");

var alphaUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var alphaLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var inverseString = "";

for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < alphaUp.length; j++) {
        if (string[i] === alphaUp[j]) {
            inverseString += string[i].toLowerCase();
        }
    }
    for (var k = 0; k < alphaLow.length; k++) {
        if (string[i] === alphaLow[k]) {
            inverseString += string[i].toUpperCase();
        }
    }
}
console.log(inverseString);


//Warmup - Anti Caps
//01 JUNE 2015 on JavaScript, Week 9, Warmup, Programming Principles, Level 2
//Write a function called antiCaps which accepts a string and returns a string. The purpose of the function is to invert the capitalization of each letter in a string. For example:
//
//antiCaps('Hello') // hELLO  
//antiCaps('racEcar') // RACeCAR  
//antiCaps('bAnAnA') // BaNaNa  
//Here is a helper function that will return true if the letter is uppercase, and false if the letter is lowercase:
//
//function isCaps(letter) {  
//  return letter === letter.toUpperCase();
//}
//TRY USING TWO FUNCTIONS; ONE HELPER; ONE TO INVERSE CASE.