var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        default: 0
    },
    comments: Array,
    commentsToggle: {
        type: Boolean,
        value: false
    },
    editToggle: {
        type: Boolean,
        value: false
    },
    addCommentToggle: {
        type: Boolean,
        value: false
    }
    
});

module.exports =  mongoose.model("Post", postSchema);