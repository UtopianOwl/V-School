//Problem:
//Generate and store 100 random enemies.

//array to store enemies
var enemiesList = [];
//Magic strings to store enemy types
var dragon = "Ancient Dragon";
var prowler = "Prowler"
var grunt = "Mighty Grunt"

//generates random number betweem 1 and 3
function randomNum() {
    return Math.floor((Math.random() * 3) + 1);
}

//random number generator w/ customizeable range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function to get enemy type
function getType() {
    var selection = randomNum()
    if (selection === 1) {
        return dragon;
    } else if (selection === 2) {
        return prowler;
    } else {
        return grunt;
    }
}

//function to generate enemy hitPoints
function getHitPoints(type) {
    if (type === dragon) {
        return getRandomInt(80, 100);
    } else if (type === prowler) {
        return getRandomInt(50, 79);
    } else if (type === grunt) {
        return getRandomInt(20, 49);
    }
}

//Constructor for Enemy objects
function Enemy(enemyType) {
    this.type = enemyType;
    this.hitPoints = getHitPoints(this.type);
    this.defense = this.hitPoints * 3;
}

//function to generate 100 enemies
function generateEnemies(x) {
    for (var i = 0; i < x; i++) {
        var enemy = new Enemy(getType());
        console.log(enemy);
    }
}
generateEnemies(100);