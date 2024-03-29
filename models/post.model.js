const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    createdAt:
    {
        type: Date,
        default: Date.now()
    }
},{
    versionKey: false
});

module.exports = mongoose.model('Post', postSchema);