var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false,
        unique: true
    },
    linkKarma: {
        type: Number,
        default: 0
    },
    commentKarma: {
        type: Number,
        default: 0
    },
    hasGold: {
        type: Boolean,
        default: false
    }
});

module.export = userSchema;