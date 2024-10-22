require('dotenv').config();
const mongoose= require("mongoose");
mongoose.connect(process.env.mongo_string);

const UserSchema= new mongoose.Schema({
    firstName:{
        type: String,
        require: true,
        maxLength:50
    },
    lastName:{
        type: String,
        require: true,
        maxLength:50
    },
    username:{
        type: String,
        require: true,
        minLength: 6,
        maxLength:30
    },
    password:{
        type: String,
        require: true,
        minLength: 6
    }
})
const User= mongoose.model('User',UserSchema);
const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);
module.exports={User,Account};