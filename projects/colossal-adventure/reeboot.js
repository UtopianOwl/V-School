//      Welcome to the Colossal Adventure Reboot!!
//      This is a text based RPG game for the unix terminal
//      It was designed to fit the following parameters:
//
//      The year is 1985. Your job is to build a text-based (console) RPG game.
//
//      The point of this exercise is to better master Javascript functions, loops, conditionals, and some data types.
//
//  Project Requirements:
//      Console must greet player with a fun message
//      Console must ask for the player's name and store it
//  
//  Walking: 
//      The console will ask the user to enter a "w" to walk
//      Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared. 
//      (A 1/3 or 1/4 chance of being attacked)
//  If a wild enemy appears: 
//      The enemy is random (can be chosen out of a minimum of 3 different enemy names)
//      The user can decide to attack or run
//      If attacking, you will choose a random attack power between a min and max
//      If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping
//      After the player attacks or runs the enemy attacks back for a random damage amount
//      If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory
//      If the enemy kills the player the console prints an cool death message and the game ends
//  Inventory: 
//      When the player kills enemies, they are awarded with items
//      If the user enters 'Print' in the console, the console will print the players name, HP, and each item in their inventory

var readline = require("readline-sync");

//random number generator w/ customizeable range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}
//////////////////////////////////////////////////////////////////////////////////////////
//                                                                                      //
//                                    Greeting                                          //
//                                                                                      //
/////////////////////////////////////////////////////////////////////////////////////////
console.log("You awake to the harsh rays of an unearthly sun beating upon your back and the side of your face.\nAs you begin to take stock of your surroundings it becomes clear that your are:\n-On an alien (probably hostile) planet\n-In an alien (probably hostile) universe...\nor parallel dimension...\nor whatever, Grandpa Rick is ususally a little vague about the distinction.\nTo your complete lack of surprise Grandpa Rick is nowhere in sight. I guess its up to you to defend yourself...")

//////////////////////////////////////////////////////////////////////////////////////////
//                                                                                      //
//                                 Player Generator                                     //
//                                                                                      //
/////////////////////////////////////////////////////////////////////////////////////////
//
//player chooses strenth or agility parameters

//strength: hP = 65-85; aP = 50-75; defense* = 2 - 4
//agility: hP = 50-75; aP = 65 - 85; defense* = 3
//level up multipliers:
//strength: hp = 1.1; aP = 1.01; defense = n/a
//agility hP = 1.01;  aP = 1.1; defense = 1.05;

////Magic strings to store enemy types
var strong = "strong";
var agile = "agile";

//array to store items
var inventory = [];

//function to ask user for name
function getName() {
    var nameResponse = readline.question("Uh, Whats your name again, kid?");
    return nameResponse;
}

//function to ask user for player type
function getType() {
    var valid = false;
    do {
        var typeResponse = readline.question("What manner of grandson are you?! [agile | strong]");

        if (typeResponse.toLowerCase() === agile || typeResponse.toLowerCase() === strong) {
            valid = true;
            return typeResponse;
        } else {
            console.log("ERROR: Invalid Command");
        }
    } while (!valid);
}

//function to generate player hitPoints
function getHitPoints(type) {
    if (type === strong) {
        return getRandomInt(65, 90);
    } else if (type === agile) {
        return getRandomInt(50, 70);
    }
}

//function to generate player accuracyPoints
function getAccuracyPoints(type) {
    if (type === strong) {
        return getRandomInt(50, 70);
    } else if (type === agile) {
        return getRandomInt(65, 85);
    }
}
//function to generate player defenseMultiplier
function getDefenseMult(type) {
    if (type === strong) {
        return getRandomNum(2, 4)
    } else if (type === agile) {
        return 3;
    }
}

function getLevelHP(type) {
    if (type === strong) {
        return .1;
    } else if (type === agile) {
        return .05;
    }
}

function getLevelAP(type) {
    if (type === strong) {
        return .05;
    } else if (type === agile) {
        return .1;
    }
}

function getLevelDP(type) {
    if (type === strong) {
        return 0;
    } else if (type === agile) {
        return .05;
    }
}

//a function which generates a random item
function getOrigin() {
    return "C-" + getRandomInt(100, 500);
}

//Constructor
//for player objects

function Player(playerName, playerType, playerOrigin) {
    this.name = playerName;
    this.type = playerType;
    this.hitPoints = getHitPoints(this.type);
    this.accuracy = getAccuracyPoints(this.type);
    this.origin = playerOrigin;
    this.defenseMult = getDefenseMult(this.type);
    this.defense = Math.ceil(this.hitPoints * this.defenseMult * (this.origin === "C-137" ? 2 : 1));
    this.levelHP = getLevelHP(this.type);
    this.levelAP = getLevelAP(this.type);
    this.levelDP = getLevelDP(this.type);
    this.inventory = inventory;
}

//function to instantiate player object
function generatePlayer() {
    var genPlayer = new Player(getName(), getType(), getOrigin());
    return genPlayer;
}

var player = generatePlayer();
console.log(player);
var resetDefense = player.defense;

var enemy;

//////////////////////////////////////////////////////////////////////////////////////////
//                                                                                      //
//                                  Enemy Generator                                     //
//                                                                                      //
/////////////////////////////////////////////////////////////////////////////////////////
//
//var gromflomites = new Enemy("gromflomites", "As you are walking you hear a noise in the distance...\n A buzzz...\n Buzzz...\n  Buzzzz...   BUZZZZ...\n     BUZZZZZZZZZ...", 2, 2, .4);
//
//var gazorpazorpDesc = "You are walking when you stumble across a recently-disposed-of sex robot carelessly discarded to the roadside. The mephitic odor and asmatic, wheezy rumble that could only have its origin in some unearthly large creature looming behind you, indicate it was far too recently. Here we go again..."
//
//var beta7Desc = "Beta 7 is here!\nOh, Brother!"
//
//var korblockDesc = "It's a Korblock, LOOK OUT!"
//
//var kBopDesc = "Now you're fucked!"
//

//Magic strings to store enemy types
var gromflomites = "Gromflomite";
var gazorpazorp = "Gazorpazorp";
var beta7 = "Beta-Seven";
var korblock = "Korblock";
var kBop = "Krombopulos Michael"

//function to get enemy type
function getEnemyType() {
    switch (Math.floor(Math.random() * 12)) {
    case 0:
        return gromflomites;
        break;
    case 1:
        return gromflomites;
        break;
    case 2:
        return gromflomites;
        break;
    case 3:
        return beta7;
        break;
    case 4:
        return beta7;
        break;
    case 5:
        return beta7;
        break;
    case 6:
        return gazorpazorp;
        break;
    case 7:
        return gazorpazorp;
        break;
    case 8:
        return korblock;
        break;
    case 9:
        return korblock;
        break;
    case 10:
        return kBop;
        break;
    case 11:
        return gromflomites;
        break;
    case 12:
        return beta7;
        break;
    }
}

//function to generate enemy hitPoints and accuracy
function getEnemyHitPoints(type) {
    if (type === kBop) {
        return getRandomInt(91, 100);
    } else if (type === gazorpazorp) {
        return getRandomInt(70, 85);
    } else if (type === korblock) {
        return getRandomInt(65, 80);
    } else if (type === beta7) {
        return getRandomInt(30, 50);
    } else if (type === gromflomites) {
        return getRandomInt(27, 53);
    }
}
//a function which generates a random item
function getEnemyItem() {
    switch (Math.floor((Math.random() * 6) + 1)) {
    case 1:
        return "Plumbus";
        break;
    case 2:
        return "Fleem";
        break;
    case 3:
        return "Mega Fruit Seeds";
        break;
    case 4:
        return "Crystalized Zanthonite";
        break;
    case 5:
        return "Blitz and Chitz Ticket";
        break;
    case 6:
        return "Kalaxian Crystal Dust";
        break;
    }
}

//an array to hold enemy description

//Constructor
//for Enemy objects

function Enemy(enemyType, enemyPrize) {
    this.type = enemyType;
    this.hitPoints = getEnemyHitPoints(this.type);
    this.accuracy = getEnemyHitPoints(this.type);
    this.defense = this.hitPoints * 3;
    this.prize = enemyPrize;
    this.description = "A wild " + this.type + " appears!";
}

//function to generate 100 enemies
function generateEnemy() {
    var genEnemy = new Enemy(getEnemyType(), getEnemyItem());
    return genEnemy;
}

//////////////////////////////////////////////////////////////////////////////////////////
//                                                                                      //
//                                 Combat Function                                      //
//                                                                                      //
/////////////////////////////////////////////////////////////////////////////////////////


function combat() {
    var damage = 0;
    var valid = false;
    console.log(enemy.description);
    while (!valid) {
        var combatResponse = readline.question("How do you respond? [attack | run] ")
        if (combatResponse.toLowerCase() === "attack" || combatResponse.toLowerCase("a")) {
            // attack stuff
            //compare player and enemy accuracy, greater attacks first
            if (player.accuracy >= enemy.accuracy) {
                damage = (getRandomInt(0, 100) <= player.accuracy ? player.hitPoints : 0);
                enemy.defense -= damage;
                console.log("You dealt " + enemy.type + " " + damage + " points of damage.")
                if (enemy.defense <= 0) {
                    //enemy died, level up, return to walking
                    console.log(enemy.type + " has been defeated!")
                    player.hitPoints += Math.ceil(player.hitPoints * player.levelHP);
                    player.accuracy += Math.ceil(player.accuracy * player.levelAP);
                    player.defense = resetDefense;
                    player.defense += Math.ceil(player.defense * player.levelDP);
                    resetDefense = player.defense;
                    player.inventory.push(enemy.prize);
                    //return to walking
                } else {
                    damage = (getRandomInt(0, 100) < enemy.accuracy ? enemy.hitPoints : 0);
                    player.defense -= damage;
                    console.log(enemy.type + " has dealt you " + damage + " points of damage. \n you have " + player.defense + " health remaining.")
                    if (player.defense <= 0) {
                        //player has died, quit game
                        console.log("You have died.");
                        setTimeout(console.log("Pathetic"), 50);
                        //quit game
                    } else {
                        continue;
                    }
                }
            } else {
                damage = (getRandomInt(0, 100) < enemy.accuracy ? enemy.hitPoints : 0);
                player.defense -= damage;
                console.log(enemy.type + " has dealt you " + damage + " points of damage. \n you have " + player.defense + " health remaining.")

                if (player.defense <= 0) {
                    //player has died, quit game
                    console.log("You have died.");
                    setTimeout(console.log("Pathetic"), 100);
                    //quit game
                } else {
                    damage = (getRandomInt(0, 100) <= player.accuracy ? player.hitPoints : 0);
                    enemy.defense -= damage;
                    console.log("You dealt " + enemy.type + " " + damage + " points of damage.")
                    if (enemy.defense <= 0) {
                        //enemy died, level up, return to walking
                        console.log(enemy.type + " has been defeated!")
                        player.hitPoints += Math.ceil(player.hitPoints * player.levelHP);
                        player.accuracy += Math.ceil(player.accuracy * player.levelAP);
                        player.defense = resetDefense;
                        player.defense += Math.ceil(player.defense * player.levelDP);
                        resetDefense = player.defense;
                        player.inventory.push(enemy.prize);
                        //return to walking
                    } else {
                        continue;
                    }
                }
            }
            valid = true;
        } else if (combatResponse.toLowerCase() === "run" || combatResponse.toLowerCase() === "r") {
            // run stuff
            if (getRandomInt(0, 1) === 0) {
                console.log("You ran away!")
                setTimeout(console.log("Coward"), 5000);
                walking();
            } else {
                console.log("Your escape attempt failed!");
                damage = .75 * (getRandomInt(0, 100) < enemy.accuracy ? enemy.hitPoints : 0);
                player.defense -= damage;
                console.log(enemy.type + " has dealt you " + damage + " points of damage. \n you have " + player.defense + " health remaining.")

                if (player.defense <= 0) {
                    //player has died, quit game
                    console.log("You have died.");
                    setTimeout(console.log("Pathetic"), 5000);
                    //quit game
                } else {
                    continue;
                }
            }
            valid = true;
        } else {
            console.log("ERROR: Invalid Command");
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////
//                                                                                      //
//                                Walking Function                                      //
//                                                                                      //
/////////////////////////////////////////////////////////////////////////////////////////


function walking() {
    if (getRandomInt(1, 3) === 1) {
        enemy = generateEnemy();
        combat();
    } else {
        console.log("You walk, nothing happens.");
    }
}

function print() {
    console.log(player);
}


while (true) {
    var walkResponse = readline.question("What would you like to do now? [walk | print | quit]");
    if (walkResponse.toLowerCase() === "walk" || walkResponse.toLowerCase() === "w") {
        walking();
        if (player.defense > 0) {
            continue;
        } else {
            break;
        }
    } else if (walkResponse.toLowerCase() === "print" || walkResponse.toLowerCase() === "p") {
        print();
        continue;
    } else if (walkResponse.toLowerCase() === "quit" || walkResponse.toLowerCase() === "q") {
        console.log("Thank you for playing");
        break;
    } else {
        console.log("ERROR: Invalid Command");
    }
}