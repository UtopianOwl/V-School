function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function exponent(x, y) {
    return Math.pow(x, y);
}

module.exports = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    exponent: exponent
}