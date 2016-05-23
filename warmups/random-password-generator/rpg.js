var readline = require("readline-sync");
var charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,.-/:;<>=?@{}|~`"
var length = readline.question("How many characters would you like your password to be? ")
function generatePassword(x) {
    var password = "";
    for (var i = 0; i < x; i++) {
        var random = Math.floor(Math.random()*78)
        password += charSet[random];
    }
    return password;
}
console.log("\n" + generatePassword(length) + "\n");