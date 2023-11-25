const Question = require('.././models/Question');

async function getQuestions(req,res){
    try{
        const questions = await Question.find();
        res.render('/home', { questions: questions });
    }catch(error){
        console.log(error);
    }

}


async function addQuestion(req,res){
    try {
        const question = req.body;
        //console.log(req.body);
        var date = new Date();
        //.toJSON().substring(0,10)
        const newQuestion = await Question.create({date:date,nom:question.nom,email:question.email,description:question.description});
        await newQuestion.save();
        console.log('New question created!');
    } catch (error) {
        console.log(error);
    }
}


async function deleteQuestion(req,res){
    try {
        const {}=req.body;
        await Question.findOneAndDelete({});
        console.log('Question deleted!');
    } catch (error) {
        res.send(error);
    }
}

module.exports={getQuestions,addQuestion,deleteQuestion};