var readline = require("readline-sync");
var Location = require("./location");
var myGrid = [];
var ships = 0;
var hits = 0;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
//                                              Set up the GameBoard                                       //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function createGrid() {
    for (var i = 0; i < 10; i++) {
        var array = [];
        for (var j = 0; j < 10; j++) {
            var location = new Location();
            array.push(location);
        }
        myGrid.push(array);
    }
}

var roll10 = function () {
    return Math.floor(Math.random() * 10);
}
var roll4 = function () {
    return Math.floor(Math.random() * 4);
}

function displayBoard() {
    console.log(
        "\n" + myGrid[0][0].display, myGrid[0][1].display, myGrid[0][2].display, myGrid[0][3].display, myGrid[0][4].display, myGrid[0][5].display, myGrid[0][6].display, myGrid[0][7].display, myGrid[0][8].display, myGrid[0][9].display + "\n" + myGrid[1][0].display, myGrid[1][1].display, myGrid[1][2].display, myGrid[1][3].display, myGrid[1][4].display, myGrid[1][5].display, myGrid[1][6].display, myGrid[1][7].display, myGrid[1][8].display, myGrid[1][9].display + "\n" + myGrid[2][0].display, myGrid[2][1].display, myGrid[2][2].display, myGrid[2][3].display, myGrid[2][4].display, myGrid[2][5].display, myGrid[2][6].display, myGrid[2][7].display, myGrid[2][8].display, myGrid[2][9].display + "\n" + myGrid[3][0].display, myGrid[3][1].display, myGrid[3][2].display, myGrid[3][3].display, myGrid[3][4].display, myGrid[3][5].display, myGrid[3][6].display, myGrid[3][7].display, myGrid[3][8].display, myGrid[3][9].display + "\n" + myGrid[4][0].display, myGrid[4][1].display, myGrid[4][2].display, myGrid[4][3].display, myGrid[4][4].display, myGrid[4][5].display, myGrid[4][6].display, myGrid[4][7].display, myGrid[4][8].display, myGrid[4][9].display + "\n" + myGrid[5][0].display, myGrid[5][1].display, myGrid[5][2].display, myGrid[5][3].display, myGrid[5][4].display, myGrid[5][5].display, myGrid[5][6].display, myGrid[5][7].display, myGrid[5][8].display, myGrid[5][9].display + "\n" + myGrid[6][0].display, myGrid[6][1].display, myGrid[6][2].display, myGrid[6][3].display, myGrid[6][4].display, myGrid[6][5].display, myGrid[6][6].display, myGrid[6][7].display, myGrid[6][8].display, myGrid[6][9].display + "\n" + myGrid[7][0].display, myGrid[7][1].display, myGrid[7][2].display, myGrid[7][3].display, myGrid[7][4].display, myGrid[7][5].display, myGrid[7][6].display, myGrid[7][7].display, myGrid[7][8].display, myGrid[7][9].display + "\n" + myGrid[8][0].display, myGrid[8][1].display, myGrid[8][2].display, myGrid[8][3].display, myGrid[8][4].display, myGrid[8][5].display, myGrid[8][6].display, myGrid[8][7].display, myGrid[8][8].display, myGrid[8][9].display + "\n" + myGrid[9][0].display, myGrid[9][1].display, myGrid[9][2].display, myGrid[9][3].display, myGrid[9][4].display, myGrid[9][5].display, myGrid[9][6].display, myGrid[9][7].display, myGrid[9][8].display, myGrid[9][9].display + "\n"
    );
}

//  Name            	Length
//  Aircraft carrier    5
//  Battleship          4
//  Cruiser             3
//  Destroyer           2
//  Submarine           1

function placeAircraftCarrier() {
    var x = 0,
        y = 0,
        z = 0;
    while ((z === 0 && x < 4) || (z === 1 && y > 5) || (z === 2 && x > 5) || (z === 3 && y < 4)) {
        x = roll10();
        y = roll10();
        z = roll4();
    }
    switch (z) {
    case 0:

        for (var i = 0; i < 5; i++) {
            myGrid[x - i][y].ship = true;
            myGrid[x - i][y].type = "Aircraft Carrier";
        }
        break;
    case 1:
        for (var i = 0; i < 5; i++) {
            myGrid[x][y + i].ship = true;
            myGrid[x][y + i].type = "Aircraft Carrier";
        }
        break;
    case 2:
        for (var i = 0; i < 5; i++) {
            myGrid[x + i][y].ship = true;
            myGrid[x + i][y].type = "Aircraft Carrier";
        }
        break;
    case 3:
        for (var i = 0; i < 5; i++) {
            myGrid[x][y - i].ship = true;
            myGrid[x][y - i].type = "Aircraft Carrier";
        }
        break;
    }
}

function placeBattleship() {
    var x = 0,
        y = 0,
        z = 0;
    while ((z === 0 && x < 3) || (z === 1 && y > 6) || (z === 2 && x > 6) || (z === 3 && y < 3)) {
        x = roll10();
        y = roll10();
        z = roll4();
    }
    switch (z) {
    case 0:
        if (myGrid[x][y].ship || myGrid[x - 1][y].ship || myGrid[x - 2][y].ship || myGrid[x - 3][y].ship) {
            placeBattleship();
        } else {
            for (var i = 0; i < 4; i++) {
                myGrid[x - i][y].ship = true;
                myGrid[x - i][y].type = "Battleship";
            }
            break;
        }
    case 1:
        if (myGrid[x][y].ship || myGrid[x][y + 1].ship || myGrid[x][y + 2].ship || myGrid[x][y + 3].ship) {
            placeBattleship();
        } else {
            for (var i = 0; i < 4; i++) {
                myGrid[x][y + i].ship = true;
                myGrid[x][y + i].type = "Battleship";
            }
            break;
        }
    case 2:
        if (myGrid[x][y].ship || myGrid[x + 1][y].ship || myGrid[x + 2][y].ship || myGrid[x + 3][y].ship) {
            placeBattleship();
        } else {
            for (var i = 0; i < 4; i++) {
                myGrid[x + i][y].ship = true;
                myGrid[x + i][y].type = "Battleship";
            }
            break;
        }
    case 3:
        if (myGrid[x][y].ship || myGrid[x][y - 1].ship || myGrid[x][y - 2].ship || myGrid[x][y - 3].ship) {
            placeBattleship();
        } else {
            for (var i = 0; i < 4; i++) {
                myGrid[x][y - i].ship = true;
                myGrid[x][y - i].type = "Battleship";
            }
            break;
        }
    }
}

function placeCruiser() {
    var x = 0,
        y = 0,
        z = 0;
    while ((z === 0 && x < 2) || (z === 1 && y > 7) || (z === 2 && x > 7) || (z === 3 && y < 2)) {
        x = roll10();
        y = roll10();
        z = roll4();
    }
    switch (z) {
    case 0:
        if (myGrid[x][y].ship || myGrid[x - 1][y].ship || myGrid[x - 2][y].ship) {
            placeCruiser();
        } else {
            for (var i = 0; i < 3; i++) {
                myGrid[x - i][y].ship = true;
                myGrid[x - i][y].type = "Cruiser";
            }
            break;
        }
    case 1:
        if (myGrid[x][y].ship || myGrid[x][y + 1].ship || myGrid[x][y + 2].ship) {
            placeCruiser();
        } else {
            for (var i = 0; i < 3; i++) {
                myGrid[x][y + i].ship = true;
                myGrid[x][y + i].type = "Cruiser";
            }
            break;
        }
    case 2:
        if (myGrid[x][y].ship || myGrid[x + 1][y].ship || myGrid[x + 2][y].ship) {
            placeCruiser();
        } else {
            for (var i = 0; i < 3; i++) {
                myGrid[x + i][y].ship = true;
                myGrid[x + i][y].type = "Cruiser";
            }
            break;
        }
    case 3:
        if (myGrid[x][y].ship || myGrid[x][y - 1].ship || myGrid[x][y - 2].ship) {
            placeCruiser();
        } else {
            for (var i = 0; i < 3; i++) {
                myGrid[x][y - i].ship = true;
                myGrid[x][y - i].type = "Cruiser";
            }
            break;
        }
    }
}

function placeDestroyer() {
    var x = 0,
        y = 0,
        z = 0;
    while ((z === 0 && x < 1) || (z === 1 && y > 8) || (z === 2 && x > 8) || (z === 3 && y < 1)) {
        x = roll10();
        y = roll10();
        z = roll4();
    }
    switch (z) {
    case 0:
        if (myGrid[x][y].ship || myGrid[x - 1][y].ship) {
            placeDestroyer();
        } else {
            for (var i = 0; i < 2; i++) {
                myGrid[x - i][y].ship = true;
                myGrid[x - i][y].type = "Destroyer";
            }
            break;
        }
    case 1:
        if (myGrid[x][y].ship || myGrid[x][y + 1].ship) {
            placeDestroyer();
        } else {
            for (var i = 0; i < 2; i++) {
                myGrid[x][y + i].ship = true;
                myGrid[x][y + i].type = "Destroyer";
            }
            break;
        }
    case 2:
        if (myGrid[x][y].ship || myGrid[x + 1][y].ship) {
            placeDestroyer();
        } else {
            for (var i = 0; i < 2; i++) {
                myGrid[x + i][y].ship = true;
                myGrid[x + i][y].type = "Destroyer";
            }
            break;
        }
    case 3:
        if (myGrid[x][y].ship || myGrid[x][y - 1].ship) {
            placeDestroyer();
        } else {
            for (var i = 0; i < 2; i++) {
                myGrid[x][y - i].ship = true;
                myGrid[x][y - i].type = "Destroyer";
            }
            break;
        }
    }
}

function placeSubmarine() {
    do {
        var x = roll10();
        var y = roll10();
    } while (myGrid[x][y].ship === true)
    myGrid[x][y].ship = true;
    myGrid[x][y].type = "Submarine";


}

createGrid();

placeAircraftCarrier();
placeBattleship();
placeCruiser();
placeDestroyer();
placeSubmarine();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
//                                           Gameplay Stuff                                                //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("\n\n Welcome to Battleships!\n\n")

function checkSunk(type) {
    var sunk = true;
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (myGrid[i][j].type === type) {
                if (!myGrid[i][j].hit) {
                    sunk = false;
                }
            }
        }
    }
    return sunk;
}

function newRound() {
    var coordinates,
        x,
        y;

    function getCoordinates() {
        coordinates = readline.question("Enter coordinates |[0-9],[0-9]|:  ");
        var re = /\d\,\d/
        var test = coordinates.split(re);
        if (test[0] !== "" || test[1] !== "") {
            console.log("Invalid Coordinates");
            getCoordinates();
        }
        x = parseInt(coordinates.charAt(0));
        y = parseInt(coordinates.charAt(2));
    }
    getCoordinates();
    if (myGrid[x][y].ship) {
        myGrid[x][y].hit = true;
        console.log("\n\nYou scored a HIT!\n\n");
        myGrid[x][y].display = "X";
        var type = myGrid[x][y].type;
        if (checkSunk(type)) {
            console.log("You sunk the " + type + "!");
            hits++;
            console.log((5 - hits) + " ships remain.");
        }
    } else {
        myGrid[x][y].hit = true;
        console.log("\n\nYour attack was a MISS!\n\n");
        myGrid[x][y].display = "M";
    }
    displayBoard();
}

while (hits < 5) {
    newRound();
}

console.log("\n\nYou have sunk all 5 Battleships and WON the game!")