function doMaths(x, y, operation) {
    
//    return operation === "add" ? x + y : (operation === "subtract" ? x - y : (operation === "multiply" ? x * y : (operation === "divide" ? x / y : "You must choose 'add', 'subtract', 'multiply', 'divide' as your operator.")));
    
//      Simpler and fewer lines, but more difficult to debug. Do not reccomend this method, i.e. DO NOT             NEST TERNARY OPERATORS UNLESS YOU HAVE TO! 
    
//      NOTE: The 'return' goes before the ternary operation. Without the return the variables have an undefined value. If the return is within the ternary operator: SyntaxError: Unexpected token return.
    

    
    if (operation === "add") {
        return x + y;
    } else if (operation === "subtract") {
        return x - y;
    } else if (operation === "multiply") {
        return x * y;
    } else if (operation === "divide") {
        if (y === 0) {
            return "second number cannot be 0.";
            return NaN;
        } else {
            return x / y;
        }
    
    } else {
        return "You must choose 'add', 'subtract', 'multiply', 'divide' as your operator.";
    }
}

console.log(doMaths(12,3,'add'))
console.log(doMaths(12,3,'subtract'))
console.log(doMaths(12,3,'multiply'))
console.log(doMaths(12,3,'divide'))
console.log(doMaths(12,3,'blah'))