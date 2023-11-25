const mongoose = require('mongoose');

const Question = mongoose.model('question',new mongoose.Schema({
    date : Date,
    nom: String,
    email: String,
    description: String,
    reponses: {
        date : Date,
        email: String,
        description: String
    }
}));

module.exports=Question;