var app = angular.module('Rock', ['ui.bootstrap.showErrors']);

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
    $scope.postList = [];
    modelManager.getPosts().then(function (PostList) {
        $scope.postList = PostList;
    })
    console.log($scope.postList);
    $scope.addPostToggle = false;
    
    $scope.addPost = function () {
        modelManager.addPost($scope.newPost);
        $scope.postList = modelManager.postList;
        document.newPostForm.reset();
        $scope.addPostToggle = false;
    }
    
    $scope.editPost = function (post) {
        modelManager.editPost(post);
        $scope.postList = modelManager.postList;
        document.newPostForm.reset();
        post.editToggle = false;
    }
    $scope.deletePost = function (index) {
        modelManager.deletePost($scope.postList[index]);
        $scope.postList.splice(index, 1);
        $scope.postList = modelManager.postList;
    }
    $scope.addComment = function (index) {
        modelManager.addComment($scope.newComment, index);
        $scope.postList = modelManager.postList;
    }
    $scope.editComment = function (cIndex, pIndex) {
        modelManager.editComment($scope.commentEdit, cIndex, pIndex);
        $scope.postList = modelManager.postList;
    }
    $scope.deleteComment = function (cIndex, pIndex) {
        modelManager.deleteComment(cIndex, pIndex);
        $scope.postList = modelManager.postList;
    }
    $scope.toggleComments = function (index) {
        $scope.postList[index].commentsToggle = !$scope.postList[index].commentsToggle;
    }
}]);