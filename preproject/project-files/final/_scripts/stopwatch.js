//Declare and define variable
var display = document.getElementById("display"),
    start = document.getElementById("start"),
    reset = document.getElementById("reset"),
    lap = document.getElementById("lap"),
    log = document.getElementById("log"),
    cseconds = 0,
    seconds = 0,
    minutes = 0,
    t,
    time = "00:00:00",
    run = false,
    timelog = [],
    i = 0;


//Declare functions
function add() {
    cseconds++;
    if (cseconds >= 99) {
        cseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
    }
    
    time = ((minutes != 0) ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + ((seconds != 0) ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" + (cseconds > 9 ? cseconds : "0" + cseconds);
    
    display.textContent = time;
    
    timer();
}
function timer() {
    t = setTimeout(add, 10);
}

//Start button
start.onclick = function() {
    if (run == false) {
        timer();
        document.getElementById("start").value = "stop";
        run = true;
    } 
        else {
            clearTimeout(t);
            document.getElementById("start").value = "start";
            run = false;
        }
}

//reset button
reset.onclick = function() {
    display.textContent = "00:00:00";
    cseconds = 0;
    seconds = 0;
    minutes = 0;
    log.innerHTML = "";
    time = "00:00:00";
}

//lap button
lap.onclick = function() {
    timelog[i] = time;
    log.innerHTML += "<li>" + timelog[i] + "</li>";
    i++;
//I should also have a loop probably
//this little guy prints 'i' info logs in the console, each with the values contained in the array  'timelog'
    for (let i in timelog) {
        console.info(timelog)
    }
}