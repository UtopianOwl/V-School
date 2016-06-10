var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var uuid = require('uuid');

var postList = [];

app.use(cors());
app.use(bodyParser.json());

app.get('/rock', function (req, res) {
    res.send(postList);
});

app.post('/rock', function (req, res) {
    req.body.id = uuid.v4();
    req.body.comments = [];
    req.body.commentsToggle = true;
    req.body.editToggle = false;
    postList.push(req.body);
    res.send(req.body);
});
app.put('/rock/:postId', function (req, res) {
    for (var i = 0; i < postList.length; i++) {
        if (postList[i].id === req.params.postId) {
            postList[i] = req.body;
            var postInfo = [postList[i], i]
            return res.send(postInfo);
        }
    }
    res.send("No post matching that ID was found")
});

app.delete('/rock/:postId', function (req, res) {
    for (var i = 0; i < postList.length; i++) {
        if (postList[i].id === req.params.postId) {
            postList.splice(i, 1);
            return res.send(postList);
        }
    }
    res.send("No post matching that ID was found");
});

app.listen(8000, function () {
    console.log("app is listening on port 8000");
})