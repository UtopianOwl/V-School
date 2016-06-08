var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var uuid = require('uuid');
var cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

var potterList = [];

app.get('/potters', function(req, res) {
    res.send(potterList);
})
app.post('/potters', function (req, res) {
    if (Array.isArray(req.body)) {
        for (var i = 0; i < req.body.length; i++) {
            req.body[i]._id = uuid.v4();
            potterList.push(req.body[i]);
        }
    } else {
        req.body._id = uuid.v4();
        potterList.push(req.body);
    }
    res.send(req.body);
});

app.put('/potters/:potterId', function (req, res) {
    for (var i = 0; i < potterList.length; i++) {
        if (potterList[i]._id === req.params.potterId) {
            potterList[i] = req.body;
            return res.send(potterList[i]);
        }
    }
    res.send("No potter was found with that ID")
})

app.delete('/potters/:potterId', function (req, res) {
    for (var i = 0; i < potterList.length; i++) {
        if (potterList[i]._id === req.params.potterId) {
            res.send(potterList[i]);
            potterList.splice(i, 1);
            return;
        }
    }
    res.send("No potter was found with that ID")
})


app.listen(8000, function() {
    console.log("app is listening on port 8000");
})