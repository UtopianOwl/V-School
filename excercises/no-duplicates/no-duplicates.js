var input = 'bookkeeper larry';
var splitword = input.split("");
var noDuplicates = [];
var misfits = [];
var output;
var leftOver;
var checkDuplicate = function(splitword) {
    var counts = [];
    for(var i = 0; i < splitword.length; i++) {
        if(counts[splitword[i]] === undefined) {
            counts[splitword[i]] = 1;
            noDuplicates.push(splitword[i]);
        } else {
            counts[splitword[i]] += 1;
            misfits.push(splitword[i]);
        }
    }
output = noDuplicates.join("");
leftOver = misfits.join("");
return output;
}

console.log(checkDuplicate(splitword));
console.log(leftOver);