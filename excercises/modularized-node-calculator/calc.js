var calc = require("./arithmetic/calcLogic");

function caltulator(x, y, operation) {
    
    switch (operation) {
    case "add":
        return calc.add(x, y);
        break;
    case "subtract":
        return calc.subract(x, y);
        break;
    case "multiply":
        return calc.multiply(x, y);
        break;
    case "divide":
        return calc.divide(x, y);
        break;
    case "exponentiate":
        return calc.exponent(x, y);
        break;
    }
}

console.log(caltulator(1, 2, "add"));