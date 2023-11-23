const Question = require('.././models/Question');

async function getQuestions(req,res){
    try{
        const questions = await Question.find();
        res.send(questions);
    }catch(error){
        console.log(error);
    }

}



async function addQuestion(req,res){
    try {
        const {date,nom,email,question} = req.body;
        const newQuestion = await Question.create({date:date,nom:nom,email:email,question:question});
        await newQuestion.save();
        res.send('New question created!');
    } catch (error) {
        console.log(error);
    }
}

module.exports={getQuestions,addQuestion};