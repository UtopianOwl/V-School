var readline = require("readline-sync");

var evensOnlyArray = [];
var oddsOnly = [];
var evenOdd = [];
var sortedArray = [];
var x;
var response = readline.question('Enter a Number: ');

function createEvenArray(highestNum) {
    x = highestNum;
    for (i = 2; i <= highestNum; i += 2) {
        evensOnlyArray.push(i);
    }
    return evensOnlyArray;
}
createEvenArray(parseInt(response));

function addOdds() {
    if (x % 2 === 0) {
        for (j = 0; j < (evensOnlyArray.length - 1); j++) {
            var addNum = evensOnlyArray[j] + 1;
            oddsOnly.push(addNum);
        }
    } else {
        for (j = 0; j < (evensOnlyArray.length); j++) {
            var addNum = evensOnlyArray[j] + 1;
            oddsOnly.push(addNum);
        }
    }
    evenOdd = evensOnlyArray.concat(oddsOnly);
    return evenOdd;
}

function sortNums(sortedArray) {
    sortedArray = addOdds();
    return sortedArray.sort(function (a, b) {
        return a - b
    });
}
console.log(sortNums());