const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    image:
    {
        type: String,
        required: false
    },
    email:{
        type: String,
        required: true
    },
    phoneNo:{
        type: String,
        required: true
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('User', userSchema);