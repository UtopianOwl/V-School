var app = angular.module('Rock', []);

app.directive('autoFocus', function($timeout) {
    return {
        restrict: 'AC',
        link: function(_scope, _element) {
            $timeout(function(){
                _element[0].focus();
            }, 0);
        }
    };
});

app.controller('mainCtrl', ['$scope', 'modelManager', function ($scope, modelManager) {
    $scope.modelManager = modelManager;
    $scope.addPostToggle = false;
    $scope.newComment   = {};
    modelManager.getPosts();
    
    $scope.addPost = function () {
        modelManager.addPost($scope.newPost);
        document.newPostForm.reset();
        $scope.addPostToggle = false;
    }
    
    $scope.editPost = function (post) {
        modelManager.editPost(post);
        document.newPostForm.reset();
        post.editToggle = false;
    }
    $scope.deletePost = function (post) {
        modelManager.deletePost(post);
    }
    $scope.addComment = function (post) {
        modelManager.addComment(post, $scope.newComment);
        document.newCommentForm.reset();
        post.addCommentToggle = false;
    }
    $scope.editComment = function (post, cIndex) {
        modelManager.editComment(post, cIndex, post.comments[cIndex]);
        post.comments[cIndex].editToggle = false;
    }
    $scope.deleteComment = function (post, cIndex) {
        modelManager.deleteComment(post, cIndex);
    }
    $scope.addPoint = function (post) {
        modelManager.addPoint(post);
    }
    $scope.subtractPoint = function (post) {
        modelManager.subtractPoint(post);
    }
    $scope.toggleComments = function (index) {
        $scope,modelManager.postList[index].commentsToggle = !$scope.modelManager.postList[index].commentsToggle;
    }
}]);