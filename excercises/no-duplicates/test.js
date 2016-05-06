var input = 'bookkeeper larry';
var splitword = input.split("");
var numbers = [];
var letters = [];
var noDuplicates = [];
var misfits = [];
var prev;

//First attempt; created two arrays one with the letter value and one with frequency thought I could use corresponding indices to sort through letters occuring more than once

function duplicate() {
    splitword = input.split("");
    splitword.sort();
    for (i = 0; i < splitword.length; i++) {
        if (splitword[i] !== prev) {
            letters.push(splitword[i]);
            numbers.push(1);
        } else {
            numbers[numbers.length - 1]++;
        }
        prev = splitword[i];
    }
console.log(letters);
console.log(numbers);
}
duplicate();

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1) {
        
    } else {
        
    }
}

//Second attempt; Considered using the 'some' or 'find' methods to sort out array elements with duplicate values.

function checkDuplicate(letter) {
    for (i = 0; i < splitword.length; i++) {
        letter === splitword[i];
    }
    
}
console.log(splitword);
console.log(splitword.some(checkDuplicate(splitword)))

for (i = 0; i < splitword.length; i++) {
    if (splitword[i])
}