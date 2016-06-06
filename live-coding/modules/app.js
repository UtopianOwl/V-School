var greet1 = require("./greetings/greet1.js");
greet1();

var greet2 = require("./greetings/greet2.js").greet2;
greet2("Hey");

var greet3 =  require("./greetings/greet3.js");
greet3.greet();

var Greeter = require("./greetings/greet4.js");

var greet4 = new Greeter();
greet4.greet();

var greet5 = require("./greetings/greet5");
greet5.greet();