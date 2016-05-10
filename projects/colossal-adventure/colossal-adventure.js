var readline = require("readline-sync");

//generates a random number
function randomNum() {
    return Math.random;
}

//variable to control the greeting
var greeting = "Hey, whats up?"

//Might switch to who goes there; depends on the intro
playerName = readline.question("What is your name, Champion? ");

//player character object
var player = new Object() {
    player.name = playerName;
    player.description = "Drunk Old Fuck";
    player.attack = 5;
    player.defense = 5;
    player.accuracy = .75;
    player.describe = function () {
        console.log(description);
    }
}

//this is an array that will hold the player stats as well as the attacking and defending functions for the player
var playerStats = [player.attack, player.defense, player.accuracy]

function playerAttack() {
    if (randomNum() <= playerStats[2]) {
        return playerStats[0];
    } else {
        return 0;
    }
}

function playerDefend() {
    if (randomNum() <= playerStats[2]) {
        return playerStats[1];
    } else {
        return 0;
    }
}

//=====================================================================================================================================================
//=====================================================================================================================================================
//
//                                              THIS IS WHERE THE CONTINUE AFTER DEATH SHOULD RETURN TO
//
//=====================================================================================================================================================
//=====================================================================================================================================================

//requests walk command ('w') from player
var walkResponse = "";

function walk() {
    walkResponse = readline.question("You find yourself on a strange planet, in what smells like a strange universe. What do you do? [w || print]: ");
    //checks if user entered walk command
    var iswalking = false;
    while (!iswalking) {
        if (walkResponse === "w") {
            wildWalk();
            iswalking = true;
        } else if (walkResponse === "print") {
            //print stuff
        } else {
            console.log("ERROR: INVALID COMMAND");
            walk();
        }
    }
}
walk();

//Roll for possibility of wild enemy appearing
function wildWalk() {
    if (randomNum() < .25) {
        //        wild enemy appears
    } else {
        console.log("Nothing happened...")
        walk()
    }
}
//Should create a prototype called Enemy to generate enemy stats
function Enemy(name, description, attack, defense, accuracy) {
    this.name = name;
    this.description = description;
    this.attack = attack;
    this.defense = defense;
    this.accuracy = accuracy;
    this.describe = function () {
        console.log(description);
    }
    this.attcking = function () {
        if (randomNum() <= accuracy) {
            return attack;
        } else {
            return 0;
        }
    }
    this.defending = function () {
        if (randomNum() <= accuracy) {
            return defense;
        } else {
            return 0;
        }
    }
}

var gromflomites = new Enemy("gromflomites", "As you are walking you hear a noise in the distance...\n A buzzz...\n Buzzz...\n  Buzzzz...   BUZZZZ...\n     BUZZZZZZZZZ...", 5, 2, .4);

var gazorpazorp = new Enemy("gazorpazorp", "You are walking when you stumble across a recently-disposed-of sex robot carelessly discarded to the roadside. The mephitic odor and asmatic, wheezy rumble that could only have its origin in some unearthly large creature looming behind you, indicate it was far too recently. Here we go again...", 7, 7, .6);

var betaSeven = new Enemy("beta7", "Beta 7 is here!\nOh, Brother!", 2, 8, .7);

var korblock = new Enemy("korblock", "It's a Korblock, LOOK OUT!", 6, 5, .65);

var krombopulosMichael = new Enemy("krombopulosMichael", "Now you're fucked!", 10, 10, .9);

//allows the user to choose their combat action (attack/run)
var isContinue = "";

function combatChoice() {
    var fightFlight = readline.question("\n [attack || defend]:");
    var isFight = false;
    while (!isFight) {
        if (fightFlight === "attack") {
            if (playerDefend <= enemyAttack) {
                var willContinue = readline.question("You have died like a little bitch.\nDo you wish to continue? [y || n]");
                var isDead = true;
                while (isDead)
                if (willContinue === "y") {
                    walk();
                    isDead = false;
                } else if (willContinue === "n") {
                    exit();
                } else
            }
        }
    }
}

//roll to see which enemy appears
function whichEnemy() {
    var enemyType = randomNum()
    if (enemyType < .4) {
        //Generate enemy 1
    } else if (enemyType < .70) {
        //generate enemy 2
    } else if (enemyType < .90) {
        //generate enemy 3
    } else if (enemyType <= .99) {
        //generate enemy 4
    } else {
        //generate Krombopulous Michael
    }
}

//Exit
function exit() {
    break;
}