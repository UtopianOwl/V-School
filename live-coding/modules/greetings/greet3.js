function Greeter() {
    this.greeting = "Hello I'm the greeter object from greet3.js"
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = new Greeter();