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
    console.log ("green")
}

function orange () {
    document.getElementById("square").style.backgroundColor = "orange";
}

document.getElementById("square").addEventListener("mouseover", blue);

document.getElementById("square").addEventListener("mousedown", red);

document.getElementById("square").addEventListener("mouseup", yellow);

//can't get square element to fire scroll event
document.getElementById("square").addEventListener("scroll", green);
// window.addEventListener("scroll", green);

document.getElementById("square").addEventListener("dblclick", orange);

window.addEventListener("keydown", function (e) {
    if (e.keyCode === 66) {
        document.getElementById("square").style.backgroundColor = "blue";
    } else if (e.keyCode === 82){
        document.getElementById("square").style.backgroundColor = "red";
    } else if (e.keyCode === 89){
        document.getElementById("square").style.backgroundColor = "yellow";
    } else if (e.keyCode === 71){
        document.getElementById("square").style.backgroundColor = "green";
    } else if (e.keyCode === 79){
        document.getElementById("square").style.backgroundColor = "orange";
    }
});