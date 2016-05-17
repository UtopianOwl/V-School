var tableStart;

// To retrieve this object from web storage:
function loadScores() {
    tableStart = JSON.parse(localStorage.getItem('tableStart'));
    console.log(tableStart);
    var tr0 = document.createElement("TR");
    for (var n in tableStart) {
        var td0 = document.createElement("TD");
        var txt0 = document.createTextNode(tableStart[n]);
        td0.appendChild(txt0);
        tr0.appendChild(td0);
    }

    document.getElementById("scoresTable").appendChild(tr0);
}

// Constructor function to create High Score Objects
function HighScore(name, game, date, score, trash) {
    this.name = name;
    this.game = game;
    this.date = date;
    this.score = score;
    this.trash = trash;
}
var newHighScore = {};
var highScoresList = [];

//An array to hold trash talk phrases, and a function to generate a random one
function talkTrash() {
    var trash = ["Suck it!", "How ya like dem apples", "Y'all got Pwn3d!", "Eat my shorts!", "Punk-ass!"]
    var x = Math.floor(Math.random() * 5);
    return trash[x];
}


// Creates a new object of class "High Score" to hold the form data
function createHighScoreObject() {
    var name = document.newHighScore.name.value;
    console.log(name);
    var game = document.newHighScore.game.value;
    var date = document.newHighScore.date.value;
    var score = document.newHighScore.score.value;
    if ($('#trash').prop('checked')) {
        newHighScore = new HighScore(name, game, date, score, talkTrash());
        highScoresList.push(newHighScore);
        return newHighScore;
    } else {
        newHighScore = new HighScore(name, game, date, score, "");
        highScoresList.push(newHighScore);
        return newHighScore;
    }
}

//puts new high score data in table
function printToTable() {
    var tr = document.createElement("TR");

    for (var k in newHighScore) {
        var td = document.createElement("TD");
        var txt = document.createTextNode(newHighScore[k]);
        td.appendChild(txt);
        tr.appendChild(td);
    }

    document.getElementById("scoresTable").appendChild(tr);
}

// Process the form (check for missing fields, generate trash talk, etc.)
function processForm() {
    createHighScoreObject();
    if (newHighScore.name && newHighScore.game && newHighScore.score) {
        printToTable();
        $(".new").css('display', 'none');
        $(".old").css('display', 'inline-block');
    }
}

//switch display on new to show form
function newForm() {
    $(".old").css('display', 'none');
    $(".new").css('display', 'block');
}
// To save this object to web storage:
function saveScores() {
console.log(tableStart);
localStorage.setItem('tableStart', JSON.stringify(tableStart));
}