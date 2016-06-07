var app = angular.module('AutobotApp');

app.service('modelService', ['$http', function ($http) {
    var baseUrl = 'http://mean.codingcamp.us/drewnauman/pony';

    this.get = function () {
        return $http.get(baseUrl).then(function (response) {
            return response.data;
        });
    }
    this.add = function (item) {
        return $http.post(baseUrl, item).then(function (response) {
            return response.data;
        });
    };
    this.edit = function (item, index) {
        return $http.put(baseUrl + '/' + item._id, item).then(function (response) {
            return response.data;
        });
    };
    this.delete = function (id) {
        return $http.delete(baseUrl + '/' + id);
    }

}]);