var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var tagSchema = new Schema ({
    name: {
        type: String,
        required: true;
    },
    posts: [
        {
            type: Schema.Types.ObjectId
            ref: "Post"
        }
    ]
});