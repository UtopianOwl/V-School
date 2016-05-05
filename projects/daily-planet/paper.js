// Written by Kent, Clark


var enemies = ["Lex", "Batman", "Darkseid", "Braniac", "General Zod", "Doomsday"];


function whoWins(isThereKryptonite, enemyName) {
    if (!isThereKryptonite) {
        return "Superman beats " + enemyName + ", of course";
    } else {
        return "Depends on how quick Superman can get rid of the Kryptonite. " + enemyName + " could possibly win this one.";
    }
}

for (var i = 0; i < enemies.length; i++) {
    var isThereKryptonite = (i % 2);
    console.log(whoWins(isThereKryptonite, enemies[i]));
}

function howAttractedIsLoisLaneToMe() {
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Math.random() * 10) + 1);
}

console.log(howAttractedIsLoisLaneToMe())

var clarkKent = true;
var superman = false;
svar i = 0;
while (clarkKent == true) {
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange = Math.random();
    console.log(i++)
    if (phoneBoothQuickChange >= 0.5) {
        clarkKent = false;
        superman = true;
        console.log("Now I'm Superman!");
    }
}