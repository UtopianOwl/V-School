var readline = require("readline-sync"),
    camelWord = "";
function camelCase(string) {
    var array = [];
    var a = string.indexOf(" ") !== -1,
        b = string.indexOf("-") !== -1,
        c = string.indexOf("_") !== -1,
        d = string.indexOf("/") !== -1;
    if (a) {
        array = string.split(" ");
    } else if (b) {
        array = string.split("-");
    } else if (c) {
        array = string.split("_");
    } else if (d) {
        array = string.split("/");
    } 

   array.forEach(capitalize); 
    return camelWord;
}

function capitalize(item, index) {
    if (index === 0) {
        camelWord += item.toLowerCase();
    return camelWord;
    } else {
        var capitalWord = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
        camelWord += capitalWord;
    }
}

function execute() {
var toCamel = readline.question("\n\nEnter a  prase: ")
if (toCamel === "q" || toCamel.toLowerCase().indexOf("quit") > -1) {
    console.log("\n\n");
    return
} else {
    console.log("\n\n" + camelCase(toCamel));
    execute();
}
}

execute();

