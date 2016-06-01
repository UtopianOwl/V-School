angular.module('myApp')
.service('arithmetic', function() {
    this.add = function(x, y) {
        return x + y;
    }
    this.subtract = function(x, y) {
        return x - y;
    }
    this.multiply = function(x, y) {
        return x * y;
    }
    this.divide = function(x, y) {
        return x / y;
    }
})