var app = angular.module('jeopardyApp', ["ngRoute"]);

app.service('APIService', ['$http', function ($http) {
    var question = {};
    this.get = function () {
        return $http.get('http://jservice.io/api/random').then(function (response) {
            question.category = response.data[0].category.title;
            question.question = response.data[0].question;
            question.answer = response.data[0].answer.replace(/<(?:.|\n)*?>/gm, '');
            question.difficulty = response.data[0].value;
            question.airDate = response.data[0].airdate
            console.log(question.answer);
            return question;

        });
    };
}]);

app.service('userService', ['APIService', function (APIService) {
    var self = this;
    this.user = {
        cash: 1000,
        correct: false,
        count: 0
    };
    this.question = {};
    this.start = function () {
        APIService.get().then(function (question) {
            self.question = question;
        });
    };
    this.answer = function (userAnswer) {
        self.user.answer = userAnswer;
        var patt = new RegExp(userAnswer, "i");
        if (patt.test(self.question.answer.replace(/[\(\)]/g))) {
            self.user.correct = true;
            self.user.cash += self.question.difficulty;
            self.user.count++;
        } else {
            self.user.correct = false;
            self.user.cash -= self.question.difficulty;
            self.user.count++;
        }
        if (self.user.cash < 0) {
            alert("You have run out of money after answering " + self.user.count + " questions.\nPlease Try Again.");
            window.location.href = "#/";
        }
    };
}]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/question", {
            templateUrl: "question.html",
            controller: 'questionCtrl'
        })
        .when("/response", {
            templateUrl: "response.html",
            controller: 'responseCtrl'
        })
        .otherwise({
            templateUrl: "home.html",
            controller: 'mainCtrl'
        });
});

app.controller('mainCtrl', ['$scope', '$location', 'userService', function ($scope, $location, userService) {
    $scope.userService = userService;
    $scope.start = function () {
        userService.start();
        $location.path("/question");
    };
}]);

app.controller('responseCtrl', ['$scope', '$location', 'userService', function ($scope, $location, userService) {
    $scope.userService = userService;
    $scope.start = function () {
        userService.start();
        $location.path("/question");
    };
}]);

app.controller('questionCtrl', ['$scope', '$location', 'userService', function ($scope, $location, userService) {
    $scope.userService = userService;
    $scope.answer = function () {
        userService.answer($scope.userAnswer);
        $location.path("/response");
    };

}]);