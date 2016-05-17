/*
Return the number of times that the string "code" appears anywhere
in the given string, except we'll accept any letter for the "d", so
"cope" and "cooe" would also count.

countCode("aaacodebbb") -> 1
countCode("codexxcode") -> 2
countCode("cozexxcope") -> 2
*/

function countCode(string) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var count = 0;
    var string = string.toLowerCase();
    for (i = 0; i < alphabet.length; i++) {
        var split = string.split("co" + alphabet[i] + "e");
        count += split.length - 1;
    }
    return count;
}

console.log(countCode("hellocoders"));
console.log(countCode("if this code does't work I'm not sure how I'll cope with it"));
console.log(countCode("i drink a coke while i code wearing cole hans"));