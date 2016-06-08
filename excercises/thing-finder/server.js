var express = require('express');
var app = express();
var uuid = require('uuid');
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

var jetList = [
    {
        "class": "SR-71 Blackbird"
    },
     {
        "class": "B-2 Spirit"
    },
     {
        "class": "F-35 Lightning II"
    },
     {
        "class": "V-22 Osprey"
    },
]

app.get('/jets', function (req, res) {
    if (req.query.class) {
        function checkClass(jet) {
            return jet.class === req.query.class;
        }
        res.send(jetList.filter(checkClass));
    } else {
        res.send(jetList);
    }
});

app.listen(8000, function() {
    console.log("app is listening on port 8000");
})