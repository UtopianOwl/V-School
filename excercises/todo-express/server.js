var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

var todoList = [
    {
        "name": "Loerm Ipsum",
        "description": "dolor sit amet, consectetur adipiscing elit. Nulla mollis ex ante. Mauris maximus ac arcu id tristique. Sed varius elit quis ante consectetur elementum. Vestibulum vitae tempus neque. Aliquam erat volutpat.",
        "imageUrl": "http://placekitten.com/200/200",
        "completed": false,
        "_id": "23k4lh23h2"
    }
];

app.get('/todo', function (req, res) {
    res.send(todoList);
});

app.post('/todo', function (req, res) {
    req.body._id = uuid.v4();
    todoList.push(req.body);
    res.send(req.body);
});

app.put('/todo/:todoId', function (req, res) {
    for (var i = 0; i < todoList.length; i++) {
        if (todoList[i]._id === req.params.todoId) {
            todoList[i] = req.body;
            return res.send(todoList[i]);
        }
    }
    res.send("No todo item exists with that ID")
});


//app.delete('/todo/:todoId', function (req, res) {
//    for (var i = 0; i < todoList.length; i++) {
//        if (todoList[i]._id === req.params.todoId) {
//            res.send(todoList[i]);
//            todoList.splice(i, 1);
//            return;
//        }
//    }
//    res.send("No todo with that ID found");
//})


app.delete('/todo/:todoId', function (req, res) {
    for (var i = 0; i < todoList.length; i++) {
        if (todoList[i]._id === req.params.todoId) {
            res.send(todoList[i]);
            todoList.splice(i, 1);
            return;
        }
    }
    res.send("No todo item exists with that ID")
});

app.get('/todo/:todoId', function (req, res) {
    for (var i = 0; i < todoList.length; i++) {
        if (todoList[i]._id === req.params.todoId) {
            return res.send(todoList[i]);

        }
    }
    res.send("No todo item exists with that ID")
});

app.listen(8000, function () {
    console.log("app is listening on port 8000");
});