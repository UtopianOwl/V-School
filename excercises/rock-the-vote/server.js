var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var uuid = require('uuid');
var mongoose = require("mongoose");
var port = process.env.PORT || 4000;
var postRouter = require("./routes/postRouter");

app.use(cors());
app.use(bodyParser.json());
app.use(postRouter);


mongoose.connect("mongodb://localhost/rock");


app.listen(port, function() {
    console.log("app is listening on port " + port);
})