var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: false
    },
    op: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    upvotes: {
        type: Number,
        default: 0
    },
    downvotes: {
        type: Number,
        default: 0
    },
    link: {
        type: String,
        required: false
    },
    sub: {
        type: Schema.Types.ObjectId,
        ref: "Sub",
        required: true
    },
    comments: [{
        body: {
            type: String,
            required: true
        },
        op: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        upvotes: {
            type: Number,
            default: 0
        },
        downvotes: {
            type: Number,
            default: 0
        },
        time: {
            type: Date,
            default: Date.now
        }
        gold: {
            type: Number,
            default: 0
        }
    }],
    tags: [
        {
            type: Schema.Types.ObjectId,
            ref: "Tag"
        }
    ],
    gold: {
        type: Number,
        default: 0
    },
    time: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Post", postSchema;