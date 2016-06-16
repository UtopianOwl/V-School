var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var bountyRouter = require("./bountyRouter");
var mongoose = require("mongoose");
var port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use(bountyRouter);

mongoose.connect("mongodb://localhost/bounty")

app.listen(port, function () {
    console.log("App is listening on port " + port);
});