var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var uuid = require("uuid");
var app = express();

app.use(cors());
app.use(bodyParser.json());

app.lister(8000, function() {
    console.log("app is listening on port 8000")
})
