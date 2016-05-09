var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var alpha = alphabet.toUpperCase();
var mix = [];

for (i = 0; i < people.length; i++) {
    mix.push(people[i]);
    for (j = 0; j < alpha.length; j++) {
        mix.push(alpha[j]);
    }
}
console.log(mix);