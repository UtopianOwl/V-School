var readline = require("readline-sync");

var response = readline.question("\n\nEnter a string: ");

function findFirstNonRepeat(string) {
    var char = string.charAt(0);
    if (char === string.charAt(1)) {
        while (string.indexOf(char) === 0) {
            string = string.slice(1);
        }
        return string.charAt(0);
    } else {
        return char;
    }
}

console.log("\n\n" + findFirstNonRepeat(response) + "\n\n");