var app = angular.module('postUglies', []);

app.controller('mainCtrl', ['$scope', function ($scope) {
    var myIndex;
    $scope.posts = [];
    $scope.object = {
        comments: []
    };
    $scope.createPost = function() {
        $scope.posts.push($scope.object);
        document.postForm.reset();
        $scope.object = {
            comments: []
        };
        $scope.postForm.$setPristine();
        document.postForm.title.focus();
    }
    $scope.saveIndex = function(index) {
        myIndex = index;
    }
    $scope.addComment = function() {
        $scope.posts[myIndex].comments.push($scope.newComment);
        
    }
    $scope.deletePost = function(index) {
        $scope.posts.splice(index, 1);
    }
    $scope.deleteComment = function(parentIndex, index) {
        $scope.posts[parentIndex].comments.splice(index, 1);
    }
}]);