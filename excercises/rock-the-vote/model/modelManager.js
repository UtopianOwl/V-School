var app = angular.module('Rock');

app.service('modelManager', ['modelService', function(modelService) {
    var self = this;
    this.postList = [];
    this.getPosts = function()  {
       return modelService.get().then(function (PostList) {
            self.postList = PostList;
            return self.postList;
        });
        
    }
    this.addPost = function(post) {
        modelService.post(post).then(function (Post) {
            self.postList.push(Post);
        });
    }
    this.editPost = function(post) {
        modelService.put(post).then(function (PostInfo) {
            var index = PostInfo[1];
            self.postList[index] = PostInfo[0];
        });
    }
    this.deletePost = function(post) {
        modelService.delete(post.id).then(function (PostList) {
            self.postList = PostList;
        });
    }
    this.addComment = function(comment, index) {
        var post = self.postList[index]
        post.comments.push(comment);
        modelService.put(post).then(function (PostInfo) {
            var i = PostInfo[1];
            self.postList[i] = PostInfo[0];
        });
    }
    this.editComment = function(comment, cIndex, pIndex) {
        var post = self.postList[pIndex]
        post.comments[cIndex] = comment;
        modelService.put(post).then(function (PostInfo) {
            var i = PostInfo[1];
            self.postList[i] = PostInfo[0];
        });
    }
    this.deleteComment = function(cIndex, pIndex) {
        var post = self.postList[pIndex]
        post.comments.splice(cIndex, 1);
        modelService.put(post).then(function (PostInfo) {
            var i = PostInfo[1];
            self.postList[i] = PostInfo[0];
        });
    }
}]); 