const Question = require('.././models/Question');

async function addReponse(req,res){
    try {
        const descriptionQuestion = "hello yahya";
        const descriptionReponse = req.body.descriptionReponse;
        //console.log(req.body.descriptionReponse);
        var date = new Date();
        const reponse = {
            date:date,
            email:'napoli',
            description:descriptionReponse
        };
        const question = await Question.findOneAndUpdate({ description : descriptionQuestion },{ reponses : reponse });
            console.log('New Response added!');
    } catch (error) {
        console.log(error);
    }
}

module.exports={addReponse};