var app = angular.module('AutobotApp');

app.service('modelManager', ['modelService', function (modelService) {
    this.autobotList = [];
    this.decepticonList = [];
    var self = this;
    this.get = function () {
        modelService.get().then(function (botList) {
            var fullList = [];
            fullList = botList;

            function autoCallback(element, index, array) {
                if (element.username === 'root_Autobot') {
                    self.autobotList.push(element);
                }
            }

            function decepCallback(element, index, array) {
                if (element.username === 'root_Decepticon') {
                    self.decepticonList.push(element);
                }
            }
            fullList.forEach(autoCallback);
            fullList.forEach(decepCallback);
        });
    };
}]);