var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    living: {
        type: Boolean,
        required: true
    },
    bounty: {
        type: Number,
        required: true
    },
    type: String,
    toggle: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Bounty", bountySchema);