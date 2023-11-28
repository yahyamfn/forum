const mongoose = require('mongoose');

const Reponse = mongoose.model('reponse',new mongoose.Schema({
    date : Date,
    email: String,
    description: String,
    questionDesc: String
}));

module.exports=Reponse;