var add = require("./arithmetic/add");
var subract = require("./arithmetic/subtract").subtract;
var multiply = require("./arithmetic/multiply").multiply;
var Divider = require("./arithmetic/divide");
var divider = new Divider();
var divide = divider.divide;
var exp = require("./arithmetic/exp");

function caltulator(x, y, op) {
    
    switch (op) {
    case "+":
        return add(x, y);
        break;
    case "-":
        return subract(x, y);
        break;
    case "*":
        return multiply(x, y);
        break;
    case "/":
        return divide(x, y);
        break;
    case "^":
        return exp(x, y);
        break;
    }
}

console.log("\n\n" + caltulator(2, 4, "+") + "\n\n");