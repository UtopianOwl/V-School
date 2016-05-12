/*
Given a non-empty string like "Code" return a string like "CCoCodCode".

stringSplosion("Code") → "CCoCodCode"
stringSplosion("abc") → "aababc"
stringSplosion("ab") → "aab"

*/
//create a function which takes a string and adds successively larger slices of itself to a new variable 'stringer' 
function stringSplosion(string) {
//  variable to hold my new string
    var stringer  = "";
// for loop to iterate through the indices of the string
    for (var i = 1; i <= string.length; i++) {
//  takes a slice whose size is equal to the current index (excluding 0) and adds that slice to the new string
        stringer += string.slice(0, i);
    }
    return stringer;
}

console.log(stringSplosion("abcd"));


