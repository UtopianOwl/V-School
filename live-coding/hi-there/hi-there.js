function countHi(string) {
   var array = string.split("hi");
    return array.length - 1;
}

var string1 = 'hi how are you',
    string2 = 'hi how high are you',
    string3 = 'hi how high are you this day',
    string4 = 'hi how high are you this shitty day',
    string5 = 'how are you day',
    string6 = '',
    masterArray = [string1, string2, string3, string4, string5, string6];

masterArray.forEach(function (element) {
    console.log(countHi(element));
});



function closeFar(a, b, c) {
    var bIsCloseToA = Math.abs(a - b) < 2,
        cIsCloseToA = Math.abs(a - c) < 2,
        bIsCloseToC = Math.abs(b - c) < 2;
    if (bIsCloseToA) {
        return !cIsCloseToA && !bIsCloseToC;
    } else if (cIsCloseToA) {
        return !bIsCloseToA && !bIsCloseToC;
    }
}

console.log(closeFar(1, 2, 10));
console.log(closeFar(1, 2, 3));
console.log(closeFar(4, 1, 3));