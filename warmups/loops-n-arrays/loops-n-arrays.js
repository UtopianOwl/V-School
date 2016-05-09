var evensOnlyArray = [];
var oddsOnly = [];
var evenOdd = [];
var sortedArray = [];

function createEvenArray (highestNum) {
    for (i = 2; i <= highestNum; i += 2) {
        evensOnlyArray.push(i);
    }
    return evensOnlyArray;
}
createEvenArray(20);
function addOdds() {
    for (j = 0; j < (evensOnlyArray.length - 1); j++) {
        var addNum = evensOnlyArray[j] + 1;
        oddsOnly.push(addNum);
    }
    evenOdd = evensOnlyArray.concat(oddsOnly);
    return evenOdd;
}
function sortNums(sortedArray) {
    sortedArray = addOdds();
    return sortedArray.sort(function(a, b){return a - b});
}
console.log(sortNums());