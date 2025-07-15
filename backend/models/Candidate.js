const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    fname : {
        type : String,
        required : true
    },
    lname : {
        type : String,
        required : true
    },
    dob :{
        type : Date,
        required : true
    },
    gender : {
        type : String,
        required : true,
    },
    state : {
        type : String,
        required : true,
    },
    city : {
        type : String,
        required : true,
    },
    aadharNo : {
        type : Number,
        required : true,
        unique : true
    },
    voterId : {
        type : Number,
        required : true,
        unique : true
    },
    phoneNo :{
        type : Number,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    } 
})

module.exports = mongoose.model('candidate',UserSchema);