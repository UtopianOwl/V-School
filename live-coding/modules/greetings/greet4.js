function Greeter() {
    this.greeting = "Yo! I'm from greet4.js"
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greeter;