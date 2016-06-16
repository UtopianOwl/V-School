var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var port = process.env.PORT || 4000;
var toyRouter = require("./routes/toyRoutes");
    
app.use(bodyParser.json());
app.use(toyRouter);

mongoose.connect("mongodb://localhost/toys");


app.listen(port, function() {
    console.log("app is listening on port " + port);
})



