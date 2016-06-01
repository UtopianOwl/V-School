/*
Write a function that takes a string as a an input and returns true if that string is a palindrome (same forward and backward).

Your function should be able to ignore whire space, upper-case letters, and symbols.

e.g. isPalindrome('StAr! Rats.') => true 
*/

var readline = require('readline-sync'),
    string = readline.question("\n\nEnter your word or phrase:")

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
//                              First Solution: Non RegEx                                       //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////

//function sortString () {
//var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
//    stringSimple = '';
//    for (var i = 0; i < string.length; i++) {
//        if (alpha.indexOf(string[i].toLowerCase()) !== -1) {
//            stringSimple += string[i].toLowerCase();
//        }
//    }
//    return stringSimple;
//}
//
//function reverseString(string) {
//    var stringReverse = '';
//    for (var a = string.length - 1; a >= 0; a--) {
//        stringReverse += string[a];
//    }
//    return stringReverse;
//}
//
//function isPalindrome () {
//   return sortString() === reverseString(sortString());       
//}
//
//console.log("\n\n" + isPalindrome() + "\n\n");

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
//                              Second Solution: RegEx                                          //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////

 function isPalindrome(string) {
     var simpleString = string.toLowerCase().replace(/[^a-z]/g, "");
     return simpleString === reverseString(simpleString);  
 }

function reverseString (string) {
    return string.split("").reverse().join("");
}

console.log("\n\n" + isPalindrome(string) + "\n\n");


/*
Palindromes:

Taco cat
I madam, I made radio, so I dared! Am I mad? Am I?!
bob
A man, a plan, a canal, Panama.
*/