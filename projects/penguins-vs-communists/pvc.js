function coinFlip() {
    return Math.floor(Math.random() * 2);
}

function Party(name, population) {
    this.name = name;
    this.population = population;
}
var commies = new Party("Workers Party", 1000000);
var bourgeoisie = new Party("Robot Overlords", 1000000);

var combatants = [commies, bourgeoisie];
var combatantsReverse = [bourgeoisie, commies];
var flip = coinFlip();
var winner = combatants[flip];
var loser = combatantsReverse[flip];
var party = [winner, loser];
var partyReverse = [loser, winner];

function getBystander() {
    switch (Math.floor(Math.random() * 10)) {
    case 0:
        return "MAURITANIA";
    case 1:
        return "SURINAME";
    case 2:
        return "ICELAND";
    case 3:
        return "AUSTRALIA";
    case 4:
        return "FRENCH GUIANA";
    case 5:
        return "NAMIBIA";
    case 6:
        return "MONGOLIA";
    case 7:
        return "PITCAIRN ISLANDS";
    case 8:
        return "FALKLAND ISLANDS";
    case 9:
        return "GREENLAND";
    }
}

function sendNuke(party, onHit, onMiss) {
    if (Math.floor(Math.random() * 10) < 6) {
        return onHit(party);
    } else {
        return onMiss(party);
    }
}

function onHit(party) {
    var damage = Math.floor(Math.random() * 300001) + 10000;
    party[1].population -= damage;
    console.log("\n\n");
    console.log(party[0].name + " launched a sucessful nuclear strike against " + party[1].name + ".\n" + damage + " people were vaporized.\n\n");
    return damage;
}

function onMiss(party) {
    console.log("\n\n");
    console.log(party[0].name + " launched an unsuccessful nuclear strike against " + party[1].name + ".\nConsequently " + getBystander() + " has been destroyed!\n\n");
    return 0;
}

var popA = 1000000;
var popB = 1000000;

function runSimulation() {
    setTimeout(function () {
        if (popA > 0 && popB > 0) {
            popA -= sendNuke(party, onHit, onMiss);
            popB -= sendNuke(partyReverse, onHit, onMiss);
            runSimulation();
        } else if (popA <= 0) {
            console.log("\n\nThe " + loser.name + " has been deafeated by the " + winner.name + "\n\n");
        } else if (popB <= 0) {
            console.log("\n\nThe " + winner.name + " has been defeated by the " + loser.name + "\n\n");
        }
    }, 2000);
}

runSimulation();