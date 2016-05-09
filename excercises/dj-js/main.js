function blue () {
    document.getElementById("square").style.backgroundColor = "blue";
}
function red () {
    document.getElementById("square").style.backgroundColor = "red";
}
function yellow () {
    document.getElementById("square").style.backgroundColor = "yellow";
}

function green () {
    document.getElementById("square").style.backgroundColor = "green";
}

function orange () {
    document.getElementById("square").style.backgroundColor = "orange";
}

document.getElementById("square").addEventListener(onmouseover, blue);

document.getElementById("square").addEventListener(onmousedown, red);

document.getElementById("square").addEventListener(onmouseup, yellow);

document.getElementById("square").addEventListener(onscroll, green);

document.getElementById("square").addEventListener(ondblclick, orange);