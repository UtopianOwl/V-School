var app = angular.module('Rock');

app.service('modelService', ['$http', function ($http) {
    var baseUrl = 'http://localhost:8000/rock';
    this.get = function() {
        return $http.get(baseUrl).then(function (response) {
            return response.data;
        });
    }
    this.post = function(item) {
        return $http.post(baseUrl, item).then(function (response) {
            return response.data;
        });
    }
    this.put = function(item) {
        return $http.put(baseUrl + "/" + item.id, item).then(function (response) {
            return response.data;
        });
    }
    this.delete = function(id) {
        return $http.delete(baseUrl + "/" + id).then(function (response) {
            return response.data;
        });
    }
}]);