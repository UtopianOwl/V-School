var app = angular.module('Rock');

app.service('modelManager', ['modelService', function(modelService) {
    var self = this;
    this.postList = [];
    this.getPosts = function()  {
       modelService.get().then(function (PostList) {
            self.postList = PostList;
        });
        
    }
    this.addPost = function(post) {
        modelService.post(post).then(function (Post) {
            self.postList.push(Post);
        });
    }
    this.editPost = function(post) {
        modelService.put(post).then(function (Post) {
            for (var i = 0; i < self.postList.length; i++) {
                if (self.postList[i]._id === Post._id) {
                    self.postList[i] = Post;
                }
            }
        });
    }
    this.deletePost = function(post) {
        modelService.delete(post._id).then(function (PostList) {
            self.postList = PostList;
        });
    }
    this.addComment = function(post, comment) {
        comment.editToggle = false;
        post.comments.push(comment);
        modelService.put(post).then(function (PostInfo) {
            for (var i = 0; i < self.postList.length; i++) {
                if (self.postList[i]._id === Post._id) {
                    self.postList[i] = Post;
                }
            }
        });
    }
    this.editComment = function(post, cIndex, comment) {
        post.comments[cIndex] = comment;
        modelService.put(post).then(function (PostInfo) {
            for (var i = 0; i < self.postList.length; i++) {
                if (self.postList[i]._id === Post._id) {
                    self.postList[i] = Post;
                }
            }
        });
    }
    this.deleteComment = function(post, cIndex) {
        post.comments.splice(cIndex, 1);
        modelService.put(post).then(function (PostInfo) {
            for (var i = 0; i < self.postList.length; i++) {
                if (self.postList[i]._id === Post._id) {
                    self.postList[i] = Post;
                }
            }
        });
    }
    this.addPoint = function(post) {
        post.points++;
        modelService.put(post).then(function (PostInfo) {
            for (var i = 0; i < self.postList.length; i++) {
                if (self.postList[i]._id === Post._id) {
                    self.postList[i] = Post;
                }
            }
        });
    }
    this.subtractPoint = function(post) {
        post.points--;
        modelService.put(post).then(function (PostInfo) {
            for (var i = 0; i < self.postList.length; i++) {
                if (self.postList[i]._id === Post._id) {
                    self.postList[i] = Post;
                }
            }
        });
    }
}]); 