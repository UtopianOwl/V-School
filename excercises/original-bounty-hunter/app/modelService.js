var app = angular.module('bountyApp');

app.service('httpService', ['$http', function ($http) {
    var baseUrl = 'http://localhost:4000/bounty'
    this.get = function () {
        return $http.get(baseUrl).then(function (response) {
            return response.data;
        });
    };

    this.post = function (item) {
        return $http.post(baseUrl, item).then(function (response) {
            return response.data;
        });
    };

    this.put = function (item) {
        return $http.put(baseUrl + '/' + item._id, item).then(function (response) {
            return response.data;
        });
    };

    this.delete = function (id) {
        return $http.delete(baseUrl + '/' + id).then(function (response) {
            return response.data;
        });
    };

}]);

app.service('managerService', ['httpService', function (httpService) {
    var self = this;
    this.bountyList = [];

    this.get = function () {
        httpService.get().then(function (BountyList) {
            self.bountyList = BountyList;
        });
    }
    this.add = function (bounty) {
        httpService.post(bounty).then(function (newBounty) {
            self.bountyList.push(newBounty);
        });
    }
    this.edit = function (bounty) {
        httpService.put(bounty).then(function (Bounty) {
            for (var i = 0; i < self.bountyList.length; i++) {
                if (Bounty._id === self.bountyList[i]) {
                    self.bountyList[i] = Bounty;
                }
            }
        });
    }
    this.delete = function (bounty) {
        httpService.delete(bounty._id).then(function (BountyList) {
            self.bountyList = BountyList; 
        });
    }
}]);