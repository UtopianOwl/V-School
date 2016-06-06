function Multiplier() {
    this.multiply = function(x, y) {
        return x * y;
    }
}
module.exports = new Multiplier();