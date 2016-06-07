var app = angular.module('bountyApp');

app.service('httpService', ['$http', function($http) {
    var baseUrl = 'http://localhost:8000/bounty'
    this.get = function() {
        return $http.get(baseUrl).then(function (response) {
            return response.data;
        });
    };
    
    this.add = function(item) {
        return $http.post(baseUrl, item).then(function (response) {
            return response.data;
        });
    };
    
    this.edit = function(item) {
        return $http.put(baseUrl + '/' + item.id, item).then(function (response) {
            return response.data;
        });
    };
    
    this.delete = function(id) {
        return $http.delete(baseUrl + '/' + id).then(function (response) {
            return response.data;
        });
    };
    
}]);