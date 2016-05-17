var phrase = "slimy smelly solution";

function getFrequency(string) {
    var letterFrequency = {};
    for (var i = 0; i < string.length; i++) {
        var letter = string[i];
        if (!letterFrequency.hasOwnProperty(letter)) {
            letterFrequency[letter] = 1;
        } else {
            letterFrequency[letter] += 1;
        }
        
    }
    return letterFrequency;
}

function noDupes(string) {
    var frequency = getFrequency(string);
    var letters = "";
    for(var k in frequency) letters += k;
    return letters
}

function matchToValue(sort, sorted, unsorted) {
    for (var i = 0; i < sort.length; i++) {
        sorted[sort[i]] = unsorted[sort[i]];
    }
}

function sortFrequency(string) {
    var frequency = getFrequency(string);
    var sortedKeys = Object.keys(frequency).sort(function(a,b){return frequency[a]-frequency[b]}).reverse();
    var sortedFrequency = {};
    matchToValue(sortedKeys, sortedFrequency, frequency);
    return sortedFrequency;
}
