var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var intercept = require('./intercept');


app.use(bodyParser.json());
app.use('/intercept', intercept);

app.get('/intercept', function (req, res) {
    res.send(req.dinosaur)
});

app.listen(8000, function() {
    console.log("app is listening on port 8000");
});