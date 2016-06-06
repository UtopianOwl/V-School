var app = angular.module('MainApp');

app.directive('entry', function () {
    return {
        restrict : 'E',
        scope: {
            'wishEntry': '='
        },
        templateUrl: 'public/views/global/entry.html'
    };
});