var express = require("express");
var postRouter = express.Router();
var Post = require("../model/post");



postRouter.get('/rock', function (req, res) {
    Post.find(function (err, PostList) {
        if (err) throw err;
        res.send(PostList);
    });
});

postRouter.post('/rock', function (req, res) {
    var newPost = new Post(req.body);
    newPost.save(function (err, post) {
        if (err) throw err;
        res.send(post);
    });
});
postRouter.put('/rock/:postId', function (req, res) {
    Post.findByIdAndUpdate(req.params.postId, req.body, {new: true}, function (err, post) {
        if (err) throw err;
        res.send(post);
    });
});

postRouter.delete('/rock/:postId', function (req, res) {
    Post.findByIdAndRemove(req.params.postId, function (err, post) {
        if (err) throw err;
        Post.find(function (err, PostList) {
            if (err) throw err;
            res.send(PostList);
        });
    });
});


module.exports = postRouter;