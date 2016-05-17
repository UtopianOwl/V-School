// Problem: take three numbers and find their sum. Numbers in the range of 13-14, and 17-19 should be counted as zero
var readline = require("readline-sync");


//function to check if a number is a "teen"; if it is returns 0
function fixTeen(n){
    if (n === 13 || n === 14 || n === 17 || n === 18 || n === 19) {
        return 0;
    } else {
        return n;
    }
   
}
function addEmUp(x, y, z) {
    var sum =  fixTeen(x) + fixTeen(y) + fixTeen(z);
    return sum;
}
var a = parseInt(readline.question("\nEnter a number: "));
var b = parseInt(readline.question("\nEnter another number: "));
var c = parseInt(readline.question("\nEnter another number, again: "));

console.log("\n\n" + addEmUp(a, b, c) + "\n\n");

