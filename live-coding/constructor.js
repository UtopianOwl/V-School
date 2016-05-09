//var person = {
//    name: "Sarah",
//    age: 31,
//    
//}
//
//var bob = {
//    name: "Bob",
//    age: 30,
//}
//
//var john = {
//    name: "John",
//    age: 32,
//}
//
//var house1 = {
//    floorMaterial: "carpet"
//}
//
//var house2 = {
//    floorMaterial: "hardwood"
//}
////Constructor function; creates a prototype.
//
////this will only create identical object
//function Person () {
//    this.name = "Sarah"
//    this.age = 31;
//    this.favoriteFood = "Chicken Cordon Bleu";
//}

//this will allow you to pass information to object properties using variables defined in the parameters
function Person (name, age, favoriteFood) {
    this.name = name;
    this.age = age;
    this.favoriteFood = favoriteFood;
}
//now we can create new instances of this class without hardcoding values
var sarah = new Person("Sarah", 31, "Chicken Cordon Bleu");
var bob = new Person("Bob", 31, "Pizza");
console.log(sarah);
console.log(bob);