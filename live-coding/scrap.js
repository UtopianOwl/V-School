//var consonants = "";
//var vowels = ["a", "e", "i", "o", "u"];
//var isVowel = false;
//
//function noVowel(string) {
//    for (var i = 0; i < string.length; i++) {
//        if (vowels.indexOf(string[i]) < 0) {
//            consonants += string[i];
//        }
//    }
//    return consonants;
//}
//console.log(noVowel("Hippopotomus"));

function Cars(make, mpg, tankSize) {
    this.make = make;
    this.mpg = mpg;
    this.tankSize = tankSize;
    this.distance = function () {
        return this.mpg * this.tankSize
    }
}

var toyota = new Cars("Toyota", 35, 14);

console.log(toyota);

function howFar(distance) {
    console.log( "your car can travel " + distance + " miles on one tank of gas.")
}

howFar(toyota.distance());