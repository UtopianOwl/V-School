//Add function
document.getElementById('addButton').onclick = function() {add();}
function add() {
    var x = 0,
        y = 0;
    x = parseInt(document.getElementById('addFirstValue').value);
    y = parseInt(document.getElementById('addSecondValue').value);
    console.log(x + " + " + y)
    document.getElementById('sum').innerHTML = x + y;
}

//Subtract function
document.getElementById('subButton').onclick = function() {subtract();}
function subtract() {
    var x = 0,
        y = 0;
    x = parseInt(document.getElementById('subFirstValue').value);
    y = parseInt(document.getElementById('subSecondValue').value);
    console.log(x + " - " + y)
    document.getElementById('difference').innerHTML = x - y;
}

//Multiply function
document.getElementById('multButton').onclick = function() {multiply();}
function multiply() {
    var x = 0,
        y = 0;
    x = parseInt(document.getElementById('multFirstValue').value);
    y = parseInt(document.getElementById('multSecondValue').value);
    console.log(x + " * " + y)
    document.getElementById('product').innerHTML = x * y;
}

//Divide function
document.getElementById('divButton').onclick = function() {divide();}
function divide() {
    var x = 0,
        y = 0;
    x = parseInt(document.getElementById('divFirstValue').value);
    y = parseInt(document.getElementById('divSecondValue').value);
    console.log(x + " / " + y)
    document.getElementById('quotient').innerHTML = x / y;
}