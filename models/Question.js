const mongoose = require('mongoose');

const Question = mongoose.model('question',new mongoose.Schema({
    date : Date,
    nom: String,
    email: String,
    question: String,
    reponsesLink: {type:String,required:false}
}));

module.exports=Question;