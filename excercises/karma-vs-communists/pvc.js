function Party(name, population) {
    this.name = name;
    this.population = population;
}

function getParty(party1, party2) {
    if (Math.floor(Math.random() * 2) === 0) {
        return [party1, party2];
    } else {
        return [party2, party1];
    }
}

var commies = new Party("Workers Party", 1000000);
var bourgeoisie = new Party("Robot Overlords", 1000000);
var party = getParty(commies, bourgeoisie);
var firstStrike = true;

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

function roll10() {
    return Math.floor(Math.random() * 10);
}

function sendNuke(party, roll, onHit, onMiss, x, y) {
    firstStrike = !firstStrike;
    if (roll() < 6) {
        onHit(party, x, y);
    } else {
        onMiss(party, x, y);
    }
}

function onHit(party, x, y) {
    var damage = Math.floor(Math.random() * 300001) + 10000;
    party[y].population -= damage;
    console.log("\n\n");
    console.log(party[x].name + " launched a sucessful nuclear strike against " + party[y].name + ".\n" + damage + " people were vaporized.\n");
    if (party[y].population >= 0) {
        console.log(party[y].population + " people remain.\n\n")
    } else {
        console.log("Everyone has perished.\n\n")
    }
}

function onMiss(party, x, y) {
    console.log("\n\n");
    console.log(party[x].name + " launched an unsuccessful nuclear strike against " + party[y].name + ".\nConsequently " + getBystander() + " has been destroyed!\n\n");
}

function runSimulation() {
    setTimeout(function () {
        if (party[0].population <= 0) {
            console.log("\n\nThe " + party[1].name + " deafeated the " + party[0].name + "!\n" + party[1].name + " Population: " + party[1].population + "\n\n");
        } else if (party[1].population <= 0) {
            console.log("\n\nThe " + party[0].name + " defeated the " + party[1].name + "!\n" + party[0].name + " Population: " + party[0].population + "\n\n");
        } else {
            if (firstStrike) {
                sendNuke(party, roll10, onHit, onMiss, 0, 1);
                runSimulation();
            } else if (!firstStrike) {
                sendNuke(party, roll10, onHit, onMiss, 1, 0);
                runSimulation();
            }
        }
    }, 2000);
}
runSimulation();