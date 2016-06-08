var uuid = require('uuid');

module.exports = function (req, rex, next) {
    if (req.method = "GET") {
        req.dinosaur = "T-Rex";
    }
    next();
}