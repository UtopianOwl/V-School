/*
Given an array of integers, return true if the array containsa 2 next to a 2 somewhere.

has22([1, 2, 2]) ==> true
has22([1, 2, 1, 2]) ==> false
has22([2, 2, 2]) ==> false
*/

function has22(numsArray) {
    return /22/.test(numsArray.join(""));
}

console.log(has22([1, 2, 2]));
console.log(has22([1, 2, 1, 2]));
console.log(has22([2, 1, 2]));