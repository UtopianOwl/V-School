var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

var bountyList = [
    {
        "firstName": "Darth",
        "lastName": "Revan",
        "living": true,
        "bounty": 1000000,
        "type": "Sith"
    }
];

app.get('/bounty', function (req, res) {
    res.send(bountyList);
});

app.post('/bounty', function (req, res) {
    function callback(element, index, array) {
        element.id = uuid.v4();
        bountyList.push(element);
    }
    if (Array.isArray(req.body)) {
        req.body.forEach(callback);
    } else {
        req.body.id = uuid.v4();
        bountyList.push(req.body);
    }
    res.send(req.body);
});

app.put('/bounty/:bountyId', function (req, res) {
    for (var i = 0; i < bountyList.length; i++) {
        if (bountyList[i].id === req.params.bountyId) {
            bountyList[i] = req.body;
            res.send(bountyList[i]);
            return;
        }
    }
    res.send("No bounty with that ID found");
});

app.delete('/bounty/:bountyId', function (req, res) {
    for (var i = 0; i < bountyList.length; i++) {
        if (bountyList[i].id === req.params.bountyId) {
            res.send(bountyList[i]);
            bountyList.splice(i, 1);
            return;
        }
    }
    res.send("No bounty with that ID found");
})

app.listen(8000, function () {
    console.log("App is listening on port 8000");
});