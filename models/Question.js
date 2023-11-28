const mongoose = require('mongoose');

const Question = mongoose.model('question',new mongoose.Schema({
    date : Date,
    email: String,
    description: String
}));

module.exports=Question;