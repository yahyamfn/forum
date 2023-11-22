const mongoose =require("mongoose");


const User = mongoose.model('User', new mongoose.Schema({
    nom: {
        type: String,
    },
    email: {
        type: String,
    },
    password:{
        type: String
    }
}));

module.exports=User;